import { StringToBooleanSchema } from '..';

describe('StringToBooleanSchema', () => {
    it('should transform "true" string to boolean true', () => {
        expect(StringToBooleanSchema.parse('true')).toBe(true);
        expect(StringToBooleanSchema.parse('TRUE')).toBe(true);
    });

    it('should transform "false" string to boolean false', () => {
        expect(StringToBooleanSchema.parse('false')).toBe(false);
        expect(StringToBooleanSchema.parse('False')).toBe(false);
    });

    it('should transform some to undefined', () => {
        expect(StringToBooleanSchema.safeParse('test').success).toBe(false);
        expect(StringToBooleanSchema.safeParse('').success).toBe(false);
        expect(StringToBooleanSchema.safeParse(1).success).toBe(false);
        expect(StringToBooleanSchema.safeParse({}).success).toBe(false);
    });
});
