import { z } from 'zod';

const baseUrlSchema = z
    .string()
    .regex(/^(https?|wss?):\/\/([^\s:@]+(:[^\s:@]+)?@)?([\w.-]+)(\.[\w]+)*(:[0-9]+)?(\/[^\s]*)?$/);

const domainSchema = z.string().regex(/^([\w-]+)(\.[\w-]+)*$/);

const pathSchema = z.string().regex(/^\/(?![/\s])[^\s]*$/);

export const urlSchema = z.union([baseUrlSchema, pathSchema, z.literal('')]);

export const urlDomainSchema = z.union([urlSchema, pathSchema, domainSchema, z.literal('')]);
