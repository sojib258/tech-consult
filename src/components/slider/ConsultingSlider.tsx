/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { Heading, NormalText, Overlay } from '@/components';
import { useColors } from '@/hooks';
import { zIndex } from '@/lib/config/constants';
// import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Image } from '@chakra-ui/react'; // If you're using Chakra UI
import { FC, useRef } from 'react';
import SlickSlider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import { responsiveConsultingSlider } from './responsive';
import { NextButton, PrevButton } from './index';
import 'slick-carousel/slick/slick.css';

type SliderItem = {
	title: string;
	shortDescription?: string;
	textList?: string[];
	image: string;
};
type SliderData = {
	one: SliderItem;
	two: SliderItem;
	three: SliderItem;
	four: SliderItem;
	five: SliderItem;
	six: SliderItem;
};

type ConsultingSliderProps = {
	sliderData: SliderData;
};

const ConsultingSlider: FC<ConsultingSliderProps> = ({ sliderData }) => {
	const { colors } = useColors();
	const sliderRef = useRef<SlickSlider | null>(null);
	const valuesMap = Object.values(sliderData);

	const settings = {
		centerMode: true,
		centerPadding: '300px',
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: true,
		slidesToShow: 1,
		infinite: true,
		speed: 1500,
		prevArrow: <PrevButton onClick={() => sliderRef.current?.slickPrev()} />,
		nextArrow: <NextButton onClick={() => sliderRef.current?.slickNext()} />,
		responsive: responsiveConsultingSlider,
	};

	return (
		<Box overflowX='hidden' h='full' w='full'>
			<SlickSlider {...settings}>
				{valuesMap.map((item, index) => (
					<Box key={index} px='20px' overflow='hidden'>
						<Box position={item?.title && 'relative'} h='80vh'>
							<Image
								src={item?.image}
								alt={`slide-${index}`}
								borderRadius='md'
								boxShadow='md'
								objectFit='cover'
								w='full'
								h='full'
							/>
							{/* {item.heading && <Overlay />} */}
							{item?.title && <Overlay />}

							{item?.title && (
								<Box
									zIndex={zIndex?.hero}
									position='absolute'
									w={{ base: '90%', lg: '80%', '2xl': '70%' }}
									top='50%'
									left='50%'
									transform={'translate(-50%, -50%)'}
								>
									<Heading
										fontSize={{ base: '1.2rem', md: '2rem', xl: '3rem' }}
										fontWeight='600'
										color={colors?.white}
										textAlign={'center'}
									>
										{item?.title}
									</Heading>
									{item?.shortDescription && (
										<NormalText
											fontSize={{ base: '1rem', xl: '1.5rem' }}
											textAlign={'center'}
											mb='1rem'
										>
											{item?.shortDescription}
										</NormalText>
									)}
									{item?.textList?.map((item: any, i: number) => (
										<NormalText
											key={i}
											fontSize={{ base: '.875rem', md: '1rem' }}
											color={colors?.white}
										>
											{`• ${item}`}
										</NormalText>
									))}
								</Box>
							)}
						</Box>
					</Box>
				))}
			</SlickSlider>
		</Box>
	);
};

export default ConsultingSlider;
