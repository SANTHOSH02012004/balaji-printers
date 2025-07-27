import { Request, Response } from 'express';
export declare class ContactController {
    static submitContact(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static getAllContacts(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static getContactById(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static updateContactStatus(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=contactController.d.ts.map