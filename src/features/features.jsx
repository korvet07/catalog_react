import { StyledFeatures, ValueFeature, WrapperFeature } from './styled';

export default function Features({ feature }) {
  return (
    <WrapperFeature>
      <StyledFeatures>
        <span>Мощность лампы:</span>
        <ValueFeature>{feature.power_lamp}</ValueFeature>
      </StyledFeatures>
      <StyledFeatures>
        <span>Степень защиты:</span>
        <ValueFeature>{feature.protection}</ValueFeature>
      </StyledFeatures>
      <StyledFeatures>
        <span>Тип цоколя:</span>
        <ValueFeature>{feature.plinth_type}</ValueFeature>
      </StyledFeatures>
      <StyledFeatures>
        <span>Площадь освещения:</span>
        <ValueFeature>{feature.lighting_area}</ValueFeature>
      </StyledFeatures>
      <StyledFeatures>
        <span>Напряжение сети:</span>
        <ValueFeature>{feature.voltage}</ValueFeature>
      </StyledFeatures>
      <StyledFeatures>
        <span>Интерьер:</span>
        <ValueFeature>{feature.interior}</ValueFeature>
      </StyledFeatures>
    </WrapperFeature>
  )
}