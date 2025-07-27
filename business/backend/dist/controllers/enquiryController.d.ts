import { Request, Response } from 'express';
export declare class EnquiryController {
    static submitEnquiry(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static getAllEnquiries(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static getEnquiryById(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static updateEnquiryStatus(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static getEnquiriesByServiceType(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=enquiryController.d.ts.map