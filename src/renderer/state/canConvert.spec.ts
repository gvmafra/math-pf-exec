const isDecimal = (x: number) => x % 1 > Number.EPSILON;
type Fraction = [numerator: number, denominator: number];
function canConvert(userFrac: Fraction, targetDenominator: number): boolean {
  const [n, d] = userFrac;

  const numeratorIfFracHadTargetDenominator = (n * targetDenominator) / d;
  return !isDecimal(numeratorIfFracHadTargetDenominator);
}