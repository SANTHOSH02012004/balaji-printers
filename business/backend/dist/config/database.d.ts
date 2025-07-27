export declare const supabase: import("@supabase/supabase-js").SupabaseClient<any, "public", any>;
export declare const supabasePublic: import("@supabase/supabase-js").SupabaseClient<any, "public", any>;
export declare const TABLES: {
    readonly CONTACT_SUBMISSIONS: "contact_submissions";
    readonly ENQUIRY_SUBMISSIONS: "enquiry_submissions";
    readonly SUBMISSIONS_DASHBOARD: "submissions_dashboard";
};
export declare const CONTACT_STATUS: {
    readonly NEW: "new";
    readonly READ: "read";
    readonly REPLIED: "replied";
    readonly CLOSED: "closed";
};
export declare const ENQUIRY_STATUS: {
    readonly NEW: "new";
    readonly REVIEWING: "reviewing";
    readonly QUOTED: "quoted";
    readonly ACCEPTED: "accepted";
    readonly REJECTED: "rejected";
    readonly CLOSED: "closed";
};
//# sourceMappingURL=database.d.ts.map