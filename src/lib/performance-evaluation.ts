export function calculateVO2Max(cooperDistance: number): number {
  const vo2Max = (cooperDistance - 504.1) / 44.8
  return Math.max(0, Math.round(vo2Max * 100) / 100)
}

export function calculateMaxMET(vo2Max: number): number {
  return Math.round((vo2Max / 3.5) * 100) / 100
}

export function calculateTrainingFraction(maxMET: number, intensityPercentage: number): number {
  const percentage = Math.round(intensityPercentage)
  return Math.round(((maxMET + percentage) / 100) * 10000) / 10000
}

export function calculateTrainingIntensity(maxMET: number, trainingFraction: number): number {
  return Math.round(maxMET * trainingFraction * 100) / 100
}

export function calculateTrainingVelocity(trainingIntensity: number): number {
  return Math.round(((trainingIntensity * 1000) / 60) * 100) / 100
}

export function calculateTrainingDistance(trainingVelocity: number, trainingTime: number): number {
  return Math.round(trainingVelocity * trainingTime)
}

export function calculateO2ConsumptionPerMinute(
  vo2Max: number,
  intensityPercentage: number,
  bodyWeight: number,
): number {
  const consumption = (vo2Max * (intensityPercentage / 100) * bodyWeight) / 1000
  return Math.round(consumption * 100) / 100
}

export function calculateTotalO2Consumption(o2ConsumptionPerMinute: number, trainingTime: number): number {
  return Math.round(o2ConsumptionPerMinute * trainingTime * 100) / 100
}

export function calculateCaloricExpenditure(totalO2Consumption: number): number {
  return Math.round(totalO2Consumption * 5 * 100) / 100
}

export function calculateWeightLoss(caloricExpenditure: number): number {
  return Math.round((caloricExpenditure * 1000) / 7730 * 100) / 100
}

export function calculatePerformanceEvaluation({
  cooperDistance,
  intensityPercentage,
  trainingTime,
  bodyWeight,
}: {
  cooperDistance: number
  intensityPercentage: number
  trainingTime: number
  bodyWeight: number
}) {
  const vo2Max = calculateVO2Max(cooperDistance)
  const maxMET = calculateMaxMET(vo2Max)
  const trainingFraction = calculateTrainingFraction(maxMET, intensityPercentage)
  const trainingIntensity = calculateTrainingIntensity(maxMET, trainingFraction)
  const trainingVelocity = calculateTrainingVelocity(trainingIntensity)
  const trainingDistance = calculateTrainingDistance(trainingVelocity, trainingTime)
  const o2ConsumptionPerMinute = calculateO2ConsumptionPerMinute(vo2Max, intensityPercentage, bodyWeight)
  const totalO2Consumption = calculateTotalO2Consumption(o2ConsumptionPerMinute, trainingTime)
  const caloricExpenditure = calculateCaloricExpenditure(totalO2Consumption)
  const weightLoss = calculateWeightLoss(caloricExpenditure)

  return {
    vo2Max,
    maxMET,
    trainingFraction,
    trainingIntensity,
    trainingVelocity,
    trainingDistance,
    o2ConsumptionPerMinute,
    totalO2Consumption,
    caloricExpenditure,
    weightLoss,
  }
}
