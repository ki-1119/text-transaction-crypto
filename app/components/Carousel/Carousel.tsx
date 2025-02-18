import { carouselData } from '@/app/utils/consts';
import { useRef, useState } from 'react';
import {
  ResponsiveContainer,
  StackedCarousel,
} from 'react-stacked-center-carousel';
import SelectedBadge from '../SelectedBadge';

const Carousel = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [windowState, setWindowState] = useState(0);

  const data = carouselData.map((item) => ({
    ...item,
    selected: selectedItem,
  }));

  const carouselRef = useRef<StackedCarousel>(null);

  const nextItem = () => {
    setSelectedItem((selectedItem + 1) % data.length);
    carouselRef.current?.goNext();
  };

  const prevItem = () => {
    setSelectedItem((selectedItem + data.length - 1) % data.length);
    carouselRef.current?.goBack();
  };

  return (
    <div className="relative w-full min-w-[384px]">
      <div className="flex w-full flex-col items-center">
        <ResponsiveContainer
          render={(width, ref) => {
            let visibleSide = 7;
            let scale = [1, 0.5, 0.45, 0.4, 0.35];
            console.log(windowState);
            if (width >= 685 && width <= 1000) {
              visibleSide = 5;
              scale.pop();
              if (windowState !== 1) {
                setSelectedItem(0);
                setWindowState(1);
              }
            } else if (width >= 535 && width < 685) {
              visibleSide = 3;
              scale.pop();
              scale.pop();
              if (windowState !== 2) {
                setSelectedItem(0);
                setWindowState(2);
              }
            } else if (width < 535) {
              visibleSide = 1;
              scale.pop();
              scale.pop();
              scale.pop();
              if (windowState !== 3) {
                setSelectedItem(0);
                setWindowState(2);
              }
            } else {
              setWindowState(0);
            }

            return (
              <StackedCarousel
                ref={carouselRef}
                slideComponent={SelectedBadge}
                slideWidth={187}
                carouselWidth={width}
                data={data}
                maxVisibleSlide={visibleSide}
                currentVisibleSlide={visibleSide}
                disableSwipe
                customScales={scale}
              ></StackedCarousel>
            );
          }}
        />
        <div className="mx-1 my-3 h-[60px] w-[178px] rounded-[12px] border-[2px] border-dark-ele2 bg-dark-ele2 p-1 text-center">
          <div className="text-[12px] text-white">Reward Details</div>
          <div className="animate-fadeIn text-[12px] text-text-secondary">
            {data[selectedItem].rewardDetails}
          </div>
        </div>
        <button
          className="absolute left-[20px] flex h-[244px] w-[47px] items-center justify-center rounded-[32px] bg-dark-ele3 text-white"
          onClick={() => prevItem()}
        >
          {'<'}
        </button>
        <button
          className="absolute right-[20px] flex h-[244px] w-[47px] items-center justify-center rounded-[32px] bg-dark-ele3 text-white"
          onClick={() => nextItem()}
        >
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default Carousel;
