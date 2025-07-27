import { Request, Response, NextFunction } from 'express';
export declare const handleValidationErrors: (req: Request, res: Response, next: NextFunction) => void;
export declare const validateContactForm: (((req: Request, res: Response, next: NextFunction) => void) | import("express-validator").ValidationChain)[];
export declare const validateEnquiryForm: (((req: Request, res: Response, next: NextFunction) => void) | import("express-validator").ValidationChain)[];
//# sourceMappingURL=validation.d.ts.map