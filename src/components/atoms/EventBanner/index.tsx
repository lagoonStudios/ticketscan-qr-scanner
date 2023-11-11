import React from "react";
import { Image, View } from "react-native";
import { EventBannerProps } from "./EventBanner.constants";

export function EventBanner(props: EventBannerProps): React.JSX.Element {
  const { containerStyles, ...imageProps } = props;
  return (
    <View style={containerStyles}>
      <Image {...imageProps} />
    </View>
  );
}
