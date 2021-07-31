// External components
import { useState } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import YouTube from 'react-youtube'
import Image from 'next/image'

// Custom components
import { ModalBackdrop, ModalMainArea } from '../atoms/Modal'
import { sliderData } from '../../../public/staticData'

let initModalState = {}
for (let i = 0; i < sliderData.length; i++) {
	initModalState = { ...initModalState, [i]: false }
}

const opts = {
	height: '390',
	width: '640',
}

export default function MovieCarousel() {
	const [modalActive, setModalActive] =
			useState<{ [key: number]: boolean }>(initModalState),
		closeModal = () => {
			setModalActive(initModalState)
		},
		openModal = (key: number) => {
			setModalActive({ ...modalActive, [key]: true })
		},
		settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
		}

	return (
		<>
			{sliderData.map((data, idx) => {
				return (
					modalActive[idx] && (
						<div key={idx}>
							<ModalMainArea
								closeModal={closeModal}
								modalWrapperStyle="w-10/12 h-5/6"
								modalContainerStyle="h-full w-full flex flex-col justify-center "
							>
								<YouTube
									videoId={data.videoId}
									opts={opts}
									containerClassName="ov-md:h-full sm:h-[70vw] w-full flex flex-col items-center justify-center"
									className="h-5/6 w-10/12"
								/>
							</ModalMainArea>
							<ModalBackdrop closeModal={closeModal} />
						</div>
					)
				)
			})}
			<Slider
				className="w-9/12 slick-slider-tw"
				dotsClass="slick-dots-tw"
				{...settings}
				arrows={true}
				dots={true}
			>
				{sliderData.map((data, idx) => {
					function openModalCloser() {
						const key = idx
						openModal(key)
					}
					return (
						<Image
							key={idx}
							loading="lazy"
							width="1008"
							height="716"
							layout="responsive"
							objectFit="cover"
							onClick={openModalCloser}
							alt="eyecatch image"
							src={data.eyecatchImg}
						/>
					)
				})}
			</Slider>
		</>
	)
}
