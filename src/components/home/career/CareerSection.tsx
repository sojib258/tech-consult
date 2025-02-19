'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Heading, NormalText } from '@/components';
import { Box, BoxProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import { data } from '@/lib/config/data';
import { useColors } from '@/hooks';
import { responsive } from '@/lib/config/constants';

const style = {
	position: 'absolute',
	content: '""',
	top: '0px',
	left: '-2rem',
	width: '2px',
	height: 'full',
};

type CareerSectionProps = BoxProps & {};
const CareerSection: FC<CareerSectionProps> = ({ ...props }) => {
	const { career } = data;
	const { colors } = useColors();
	return (
		<Box ml={{ base: '10%', md: '20%', lg: '40%' }} {...props}>
			<Heading fontSize={responsive?.bigTitle} mb='1rem' fontWeight='bold'>
				{career?.title}
			</Heading>
			<Box
				position='relative'
				_before={{ backgroundColor: colors?.primary, ...style }}
				ml='2rem'
				py='0.1rem'
			>
				{career?.textList?.map((item: any, i: number) => (
					<NormalText fontSize={responsive?.text} my='1rem' key={i}>
						{item}
					</NormalText>
				))}
			</Box>
		</Box>
	);
};

export default CareerSection;
