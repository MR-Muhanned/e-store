// user.model.ts
export class User {
       id?: number;
       firstName?: string;
       username?: string;
       password?: string;
       token?: string;
       Role?: string;
       email?: string;
       stars?: any[]; // يجب تحديد النوع الصحيح هنا، قد تكون 'star' أو نوع آخر
     }
     