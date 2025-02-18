'use client';
import React from 'react';
import { StackedCarouselSlideProps } from 'react-stacked-center-carousel';
import Badge from '../Badge';
import UnSelectedbadge from './UnSelectedBadge';
import getBadgeProps from './convert';

const SelectedBadge = React.memo(function SelectedBadge(
  props: StackedCarouselSlideProps,
) {
  const { title, icon, isActive, value, selected } = getBadgeProps(
    props.data[props.dataIndex],
  );
  const opacities = [1, 0.75, 0.5, 0.25, 0];
  let distance = Math.abs(props.dataIndex - selected);
  if (distance >= 4) {
    distance = props.data.length - distance;
  }
  return (
    <div>
      {selected === props.dataIndex ? (
        <Badge
          title={title}
          icon={icon}
          isActive={isActive}
          value={value}
        ></Badge>
      ) : (
        <div style={{ opacity: opacities[distance] }}>
          <UnSelectedbadge icon={icon} />
        </div>
      )}
    </div>
  );
});

export default SelectedBadge;
