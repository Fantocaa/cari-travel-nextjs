import { PluginProps } from "yet-another-react-lightbox";

export default function YouTube({ augment }: PluginProps) {
  augment(({ render: { slide: renderSlide, ...restRender }, ...rest }) => ({
    render: {
      slide: ({ slide, rect, ...restSlide }) =>
        slide.type === "youtube" ? (
          <iframe
            width={Math.min(
              slide.width,
              rect.width,
              (slide.width * rect.height) / slide.height
            )}
            height={Math.min(
              slide.height,
              rect.height,
              (slide.height * rect.width) / slide.width
            )}
            src={`${slide.src}?controls=0&disablekb=1&modestbranding=1`}
            title={slide.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          renderSlide?.({ slide, rect, ...restSlide })
        ),
      ...restRender,
    },
    ...rest,
  }));
}
