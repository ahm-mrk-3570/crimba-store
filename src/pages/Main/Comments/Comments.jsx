/* eslint-disable react-hooks/refs */
import { useRef } from "react";
import "./Comments.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import TestimonialSkeleton from "../../../components/loadingComponents/TestimonialSkeleton";
import ReviewComponent from "./ReviewComponent/ReviewComponent";
import useReviews from "../../../hooks/useReviews";

export default function Comments() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const { reviews, loading } = useReviews();

  const sortedReviews = reviews.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).slice(0, 7);

  return (
    <div className="comments-main-container container-custom">
      <div className="comments-header">
        <div className="title-comments">
          <h1>Comments</h1>
        </div>
        <div className="change-comments">
          <button ref={prevRef} className="go-back">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
              />
            </svg>
          </button>
          <button ref={nextRef} className="go-next">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={4}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3,
          },
          1536: {
            slidesPerView: 4,
          },
        }}
      >
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <SwiperSlide key={index}>
                <TestimonialSkeleton />
              </SwiperSlide>
            ))
          : sortedReviews.map((item) => {
              return (
                <SwiperSlide style={{ padding: 35 }} key={item.id}>
                  <ReviewComponent item={item} />
                </SwiperSlide>
              );
            })}
      </Swiper>
    </div>
  );
}
