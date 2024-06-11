import { stringToBooleanSchema } from '..';

describe('StringToBooleanSchema', () => {
    it('should transform "true" string to boolean true', () => {
        expect(stringToBooleanSchema.parse('true')).toBe(true);
        expect(stringToBooleanSchema.parse('TRUE')).toBe(true);
    });

    it('should transform "false" string to boolean false', () => {
        expect(stringToBooleanSchema.parse('false')).toBe(false);
        expect(stringToBooleanSchema.parse('False')).toBe(false);
    });

    it('should transform some to undefined', () => {
        expect(stringToBooleanSchema.safeParse('test').success).toBe(false);
        expect(stringToBooleanSchema.safeParse('').success).toBe(false);
        expect(stringToBooleanSchema.safeParse(1).success).toBe(false);
        expect(stringToBooleanSchema.safeParse({}).success).toBe(false);
        expect(stringToBooleanSchema.safeParse([]).success).toBe(false);
        expect(stringToBooleanSchema.safeParse(undefined).success).toBe(false);
        expect(stringToBooleanSchema.safeParse(null).success).toBe(false);
    });
});
