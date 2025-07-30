"use client";

import React, { useState, useRef, useEffect } from "react";
import Modal from "react-modal";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper as SwiperType } from "swiper";

interface VideoItem {
  id: number;
  thumbnail: string;
  videoSrc: string;
}

const videoData: VideoItem[] = [
  {
    id: 1,
    thumbnail: "/images/our-clients-img/client-feedback-img.jpg",
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 2,
    thumbnail: "/images/our-clients-img/client-feedback-img.jpg",
    videoSrc: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    id: 3,
    thumbnail: "/images/our-clients-img/client-feedback-img.jpg",
    videoSrc: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    id: 5,
    thumbnail: "/images/our-clients-img/client-feedback-img.jpg",
    videoSrc: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    id: 6,
    thumbnail: "/images/our-clients-img/client-feedback-img.jpg",
    videoSrc: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    id: 7,
    thumbnail: "/images/our-clients-img/client-feedback-img.jpg",
    videoSrc: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    id: 8,
    thumbnail: "/images/our-clients-img/client-feedback-img.jpg",
    videoSrc: "https://www.w3schools.com/html/movie.mp4",
  },
];

export default function VideoSlider() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);
  const [mutedStates, setMutedStates] = useState<{ [key: number]: boolean }>(
    {}
  );
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    Modal.setAppElement("body");
  }, []);

  const openModal = (index: number) => {
    setActiveVideoIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setActiveVideoIndex(null);
  };

  const toggleMute = (videoId: number) => {
    setMutedStates((prev) => ({
      ...prev,
      [videoId]: !prev[videoId],
    }));
  };

  useEffect(() => {
    Object.entries(videoRefs.current).forEach(([id, video]) => {
      const muted = mutedStates[parseInt(id)];
      if (video && typeof muted === "boolean") {
        video.muted = muted;
      }
    });
  }, [mutedStates]);

  const handleVideoPlay = (playingId: number) => {
    setMutedStates((prev) => {
      const updated = { ...prev };
      Object.keys(videoRefs.current).forEach((idStr) => {
        const id = parseInt(idStr);
        updated[id] = id !== playingId;
      });
      return updated;
    });
  };

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <div className="container-width mx-auto px-[15px] md:px-15 py-10 bg-[#fff] relative z-10 ">
      <div className="flex flex-col gap-10">
        <div className="flex justify-center ">
          <h2 className="text-black text-[32px] md:text-[48px] leading-[120%] font-normal">
            Our Clients Feedback
          </h2>
        </div>
        <div className="relative">
          {/* Custom Arrows */}
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 z-10 w-full px-2">
            <button
              onClick={handlePrev} // ✅ hook up event
              className="swiper-button-prev-custom cursor-pointer bg-[#B6AAFF] hover:bg-[#CCE7C3] transition-all duration-500 text-white p-2 rounded-full"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={handleNext} // ✅ hook up event
              className="swiper-button-next-custom cursor-pointer bg-[#B6AAFF] hover:bg-[#CCE7C3] transition-all duration-500 text-white p-2 rounded-full"
            >
              <ArrowRight size={18} />
            </button>
          </div>

          <Swiper
           slidesPerView={5}
  spaceBetween={20}
  loop={true}
  // pagination={{
  //   clickable: true,
  //   el: ".client-swiper-pagination-custom",
  // }}
  breakpoints={{
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
    1280: {
      slidesPerView: 5,
    },
  }}
  modules={[Pagination]}
  onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {videoData.map((vid, index) => (
              <SwiperSlide key={vid.id}>
                <div
                  className="relative group overflow-hidden rounded-lg shadow-lg "
                  onMouseEnter={() => videoRefs.current[vid.id]?.play()}
                  onMouseLeave={() => videoRefs.current[vid.id]?.pause()}
                >
                  <video
                    ref={(el) => {
                      if (el) videoRefs.current[vid.id] = el;
                    }}
                    src={vid.videoSrc}
                    className="w-full h-[480px] md:h-[330px] object-cover"
                    muted={mutedStates[vid.id] ?? true}
                    loop
                    playsInline
                    preload="metadata"
                    poster={vid.thumbnail}
                    onPlay={() => handleVideoPlay(vid.id)}
                  />

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMute(vid.id);
                    }}
                    className="absolute bottom-3 left-3  text-white text-xs px-2 py-1 rounded z-10"
                  >
                    {(mutedStates[vid.id] ?? true) ? (
                      <img
                        src="/images/our-clients-img/mutted-button.svg"
                        alt="Muted"
                        width={32}
                        height={32}
                      />
                    ) : (
                      <img
                        src="/images/our-clients-img/unmutted.svg"
                        alt="Unmuted"
                        width={32}
                        height={32}
                      />
                    )}
                  </button>

                  <button
                    onClick={() => openModal(index)}
                    className="absolute top-3 right-3 text-black text-xs px-3 py-1 rounded z-10"
                  >
                    <img
                      src="/images/our-clients-img/play-button.svg"
                      alt=""
                      width={32}
                      height={32}
                    />
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* <div className="relative">
            <div className="client-swiper-pagination-custom flex justify-center mt-[20px]" />
          </div> */}
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        className="relative z-[9999] mx-auto w-full max-w-3xl outline-none"
        overlayClassName="fixed inset-0 bg-black/80 flex justify-center items-center z-[9998]"
      >
        <div className="relative w-full p-4 bg-black rounded-lg">
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 text-white text-2xl z-10"
          >
            ✖
          </button>
          <video
            key={activeVideoIndex}
            src={
              activeVideoIndex !== null
                ? videoData[activeVideoIndex].videoSrc
                : ""
            }
            className="w-full h-[400px] object-contain"
            autoPlay
            muted
            controls
            playsInline
          />

          {activeVideoIndex !== null && (
            <>
              {activeVideoIndex > 0 && (
                <button
                  onClick={() => setActiveVideoIndex(activeVideoIndex - 1)}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white z-10"
                >
                  <ArrowLeft size={32} />
                </button>
              )}
              {activeVideoIndex < videoData.length - 1 && (
                <button
                  onClick={() => setActiveVideoIndex(activeVideoIndex + 1)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white z-10"
                >
                  <ArrowRight size={32} />
                </button>
              )}
            </>
          )}
        </div>
      </Modal>
    </div>
  );
}
