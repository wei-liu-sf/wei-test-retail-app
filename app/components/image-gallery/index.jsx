/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React, {useState, useMemo, useEffect} from 'react'
import PropTypes from 'prop-types'
import {useLocation} from 'react-router-dom'

// Chakra Components
import {
    AspectRatio,
    Box,
    Img,
    Flex,

    // Hooks
    Skeleton as ChakraSkeleton,
    ListItem,
    List,
    useMultiStyleConfig
} from '@salesforce/retail-react-app/app/components/shared/ui'
import {findImageGroupBy} from '@salesforce/retail-react-app/app/utils/image-groups-utils'
import DynamicImage from '@salesforce/retail-react-app/app/components/dynamic-image'

const EnterKeyNumber = 13

const LARGE = 'large'
const SMALL = 'small'

/**
 * The skeleton representation of the image gallery component. Use this component while
 * you are waiting for product data to be returnd from the server.
 */

/**
 * The image gallery displays a hero image and thumbnails below it. You can control which
 * image groups that are use by passing in the current selected variation values.
 */
const ImageGallery = ({
    imageGroups = [],
    selectedVariationAttributes = {},
    size = 'md',
    lazy = false,
    showSkeleton = false
}) => {
    const [selectedIndex, setSelectedIndex] = useState(0)

    // Ensure selectedIndex is always a valid number
    const validSelectedIndex = Math.max(0, Math.min(selectedIndex, 999))

    // Ensure size is always a valid value to prevent hook count changes
    const validSize = size === 'lg' || size === 'sm' ? size : 'md'
    const styles = useMultiStyleConfig('ImageGallery', {size: validSize}) || {}

    // Ensure styles object is always stable to prevent hook count changes
    const stableStyles = useMemo(() => styles, [styles])
    const location = useLocation()

    // Get the 'hero' image for the current variation.
    const heroImageGroup = useMemo(
        () =>
            findImageGroupBy(imageGroups || [], {
                viewType: LARGE,
                selectedVariationAttributes: selectedVariationAttributes || {}
            }),
        [imageGroups, selectedVariationAttributes, validSize]
    )

    useEffect(() => {
        // reset the selected index when location search changes
        setSelectedIndex(0)
    }, [location?.search || '', setSelectedIndex])

    // Get a memoized image group used for the thumbnails. We use the `useMemo` hook
    // so we don't have to waste time filtering the image groups each render if the
    // selected variation attributes haven't changed.
    const thumbnailImageGroup = useMemo(
        () =>
            findImageGroupBy(imageGroups || [], {
                viewType: SMALL,
                selectedVariationAttributes: selectedVariationAttributes || {}
            }),
        [imageGroups, selectedVariationAttributes, validSize]
    )

    const thumbnailImages = thumbnailImageGroup?.images || []

    // Ensure selectedIndex is within bounds
    const safeSelectedIndex = Math.min(selectedIndex, thumbnailImages.length - 1 || 0)
    const heroImage = heroImageGroup?.images?.[safeSelectedIndex]
    const loadingStrategy = lazy ? 'lazy' : 'eager'

    const heroImageMaxWidth =
        stableStyles.heroImage?.maxWidth?.[3] || stableStyles.heroImage?.maxWidth?.[0] || '100%' // in px

    if (showSkeleton) {
        return (
            <Box data-testid="sf-image-gallery-skeleton">
                <Flex flexDirection="column">
                    <AspectRatio ratio={1} {...(stableStyles.heroImageSkeleton || {})}>
                        <ChakraSkeleton />
                    </AspectRatio>
                    <Flex>
                        {new Array(4).fill(0).map((_, index) => (
                            <AspectRatio
                                ratio={1}
                                {...(stableStyles.thumbnailImageSkeleton || {})}
                                key={index}
                            >
                                <ChakraSkeleton />
                            </AspectRatio>
                        ))}
                    </Flex>
                </Flex>
            </Box>
        )
    }

    return (
        <Flex direction="column">
            {heroImage && (
                <Box {...(stableStyles.heroImageGroup || {})}>
                    <AspectRatio {...(stableStyles.heroImage || {})} ratio={1}>
                        <DynamicImage
                            src={`${heroImage.disBaseLink || heroImage.link}[?sw={width}&q=60]`}
                            widths={{
                                base: '100vw',
                                lg: heroImageMaxWidth
                            }}
                            imageProps={{
                                alt: heroImage.alt,
                                loading: loadingStrategy
                            }}
                        />
                    </AspectRatio>
                </Box>
            )}

            <List display={'flex'} flexWrap={'wrap'}>
                {thumbnailImages.map((image, index) => {
                    const selected = index === safeSelectedIndex
                    return (
                        <ListItem
                            {...(stableStyles.thumbnailImageItem || {})}
                            key={index}
                            borderColor={`${selected ? 'black' : ''}`}
                            borderWidth={`${selected ? '1px' : 0}`}
                        >
                            <AspectRatio ratio={1}>
                                <Box
                                    as="button"
                                    aria-pressed={selected ? 'true' : 'false'}
                                    onKeyDown={(e) => {
                                        if (e.keyCode === EnterKeyNumber) {
                                            return setSelectedIndex(index)
                                        }
                                    }}
                                    onClick={() => setSelectedIndex(index)}
                                    data-testid="image-gallery-thumbnails"
                                >
                                    <Img
                                        alt={image.alt}
                                        src={image.disBaseLink || image.link}
                                        loading={loadingStrategy}
                                    />
                                </Box>
                            </AspectRatio>
                        </ListItem>
                    )
                })}
            </List>
        </Flex>
    )
}

ImageGallery.propTypes = {
    /**
     * The images array to be rendered
     */
    imageGroups: PropTypes.array,
    /**
     * The current selected variation values
     */
    selectedVariationAttributes: PropTypes.object,
    /**
     * Size of the Image gallery, this will be used to determined the max width from styles
     */
    size: PropTypes.string,
    /**
     * Determines whether the image will be lazy loaded or not
     */
    lazy: PropTypes.bool,
    /**
     * Determines whether to show skeleton instead of actual gallery
     */
    showSkeleton: PropTypes.bool
}

export default ImageGallery
