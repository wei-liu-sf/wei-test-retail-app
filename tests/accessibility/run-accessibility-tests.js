/*
 * Copyright (c) 2022, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import {execSync} from 'child_process'
import fs from 'fs'
import path from 'path'
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Configuration
const TEST_DIR = path.join(__dirname, 'accessibility')
const REPORT_DIR = path.join(__dirname, 'reports')
const COMPONENTS = [
    'ProductTile',
    'AddressDisplay',
    'DisplayPrice',
    'LoadingSpinner',
    'Breadcrumb',
    'Header',
    'AuthModal',
    'PromoCode'
]

// Ensure reports directory exists
if (!fs.existsSync(REPORT_DIR)) {
    fs.mkdirSync(REPORT_DIR, {recursive: true})
}

// Run accessibility tests for all components
function runAccessibilityTests() {
    console.log('🔍 Running Accessibility Tests for All Components...')
    console.log('='.repeat(60))

    const results = {
        total: 0,
        passed: 0,
        failed: 0,
        components: {}
    }

    COMPONENTS.forEach((component) => {
        console.log(`\n📋 Testing ${component} Accessibility...`)

        try {
            const testFile = path.join(TEST_DIR, `${component}.accessibility.test.js`)

            if (fs.existsSync(testFile)) {
                const output = execSync(`npm test -- ${testFile} --verbose`, {
                    encoding: 'utf8',
                    stdio: 'pipe'
                })

                // Parse test results
                const testCount = (output.match(/✓/g) || []).length
                const failCount = (output.match(/✗/g) || []).length

                results.components[component] = {
                    status: failCount === 0 ? 'PASSED' : 'FAILED',
                    tests: testCount,
                    failures: failCount,
                    output: output
                }

                results.total += testCount
                results.passed += testCount
                results.failed += failCount

                console.log(`  ✅ ${testCount} tests passed`)
                if (failCount > 0) {
                    console.log(`  ❌ ${failCount} tests failed`)
                }
            } else {
                console.log(`  ⚠️  No accessibility tests found for ${component}`)
                results.components[component] = {
                    status: 'NOT_FOUND',
                    tests: 0,
                    failures: 0,
                    output: 'Test file not found'
                }
            }
        } catch (error) {
            console.log(`  ❌ Error running tests for ${component}: ${error.message}`)
            results.components[component] = {
                status: 'ERROR',
                tests: 0,
                failures: 1,
                output: error.message
            }
            results.failed += 1
        }
    })

    return results
}

// Generate accessibility report
function generateReport(results) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
    const reportFile = path.join(REPORT_DIR, `accessibility-report-${timestamp}.json`)

    const report = {
        timestamp: new Date().toISOString(),
        summary: {
            total: results.total,
            passed: results.passed,
            failed: results.failed,
            successRate: results.total > 0 ? ((results.passed / results.total) * 100).toFixed(2) : 0
        },
        components: results.components,
        recommendations: generateRecommendations(results)
    }

    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2))

    console.log('\n📊 Accessibility Test Report')
    console.log('='.repeat(60))
    console.log(`Total Tests: ${results.total}`)
    console.log(`Passed: ${results.passed}`)
    console.log(`Failed: ${results.failed}`)
    console.log(`Success Rate: ${report.summary.successRate}%`)

    console.log('\n📋 Component Status:')
    Object.entries(results.components).forEach(([component, status]) => {
        const icon = status.status === 'PASSED' ? '✅' : status.status === 'FAILED' ? '❌' : '⚠️'
        console.log(`  ${icon} ${component}: ${status.status}`)
    })

    console.log(`\n📄 Detailed report saved to: ${reportFile}`)

    return report
}

// Generate recommendations based on test results
function generateRecommendations(results) {
    const recommendations = []

    if (results.failed > 0) {
        recommendations.push('Fix failing accessibility tests before deployment')
    }

    Object.entries(results.components).forEach(([component, status]) => {
        if (status.status === 'NOT_FOUND') {
            recommendations.push(`Add accessibility tests for ${component} component`)
        } else if (status.status === 'FAILED') {
            recommendations.push(`Review and fix accessibility issues in ${component} component`)
        }
    })

    if (results.total === 0) {
        recommendations.push(
            'No accessibility tests found. Consider adding comprehensive accessibility testing'
        )
    }

    return recommendations
}

// Run automated accessibility checks
function runAutomatedChecks() {
    console.log('\n🤖 Running Automated Accessibility Checks...')

    try {
        // Run axe-core checks
        const axeOutput = execSync('npm run test:accessibility:axe', {
            encoding: 'utf8',
            stdio: 'pipe'
        })
        console.log('✅ Automated accessibility checks completed')
        return axeOutput
    } catch (error) {
        console.log('❌ Automated accessibility checks failed:', error.message)
        return error.message
    }
}

// Main execution
function main() {
    console.log('🚀 Starting Comprehensive Accessibility Testing...')

    // Run component-specific tests
    const results = runAccessibilityTests()

    // Generate report
    const report = generateReport(results)

    // Run automated checks
    runAutomatedChecks()

    // Final summary
    console.log('\n🎯 Accessibility Testing Summary')
    console.log('='.repeat(60))
    console.log(`Components Tested: ${COMPONENTS.length}`)
    console.log(`Total Tests: ${results.total}`)
    console.log(`Success Rate: ${report.summary.successRate}%`)

    if (results.failed === 0) {
        console.log('\n🎉 All accessibility tests passed!')
        process.exit(0)
    } else {
        console.log('\n⚠️  Some accessibility tests failed. Please review the report.')
        process.exit(1)
    }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
    main()
}

export {runAccessibilityTests, generateReport, runAutomatedChecks}
