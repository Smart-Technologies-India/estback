
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum Role {
    NONE = "NONE",
    SYSTEM = "SYSTEM",
    ADMIN = "ADMIN",
    COLLECTOR = "COLLECTOR",
    DYCOLLECTOR = "DYCOLLECTOR",
    SUPERITENDANT = "SUPERITENDANT",
    LDC = "LDC",
    UDC = "UDC",
    SHO = "SHO",
    USER = "USER"
}

export enum Department {
    NONE = "NONE",
    EST = "EST",
    COLLECTOR = "COLLECTOR",
    DYCOLLECTOR = "DYCOLLECTOR",
    SHO = "SHO"
}

export enum Status {
    NONE = "NONE",
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE"
}

export enum Agree {
    NONE = "NONE",
    YES = "YES",
    NO = "NO"
}

export enum FormType {
    NONE = "NONE",
    MARRIAGE = "MARRIAGE",
    RELIGIOUS = "RELIGIOUS",
    ROADSHOW = "ROADSHOW",
    GENERIC = "GENERIC"
}

export enum QueryType {
    NONE = "NONE",
    INTRA = "INTRA",
    INTER = "INTER",
    PUBLIC = "PUBLIC"
}

export enum QueryStatus {
    NONE = "NONE",
    SENT = "SENT",
    RECEIVED = "RECEIVED",
    REPLIED = "REPLIED",
    RESOLVED = "RESOLVED"
}

export enum queryStatus {
    NONE = "NONE",
    SUBMIT = "SUBMIT",
    INPROCESS = "INPROCESS",
    QUERYRAISED = "QUERYRAISED",
    APPROVED = "APPROVED",
    REJECTED = "REJECTED",
    CERTIFICATEGRANT = "CERTIFICATEGRANT",
    COMPLETED = "COMPLETED"
}

export enum UserType {
    USER = "USER",
    DEPARTMENT = "DEPARTMENT"
}

export interface LoginUserInput {
    contact: string;
    password: string;
}

export interface MobileLoginInput {
    contact?: Nullable<string>;
    name?: Nullable<string>;
    otp?: Nullable<string>;
}

export interface SearchQueryInput {
    stage: FormType;
    form_id: number;
    user_id?: Nullable<number>;
    status?: Nullable<Status>;
    query_type?: Nullable<QueryType>;
}

export interface SearchCommonInput {
    form_id?: Nullable<number>;
    user_id?: Nullable<number>;
    auth_user_id?: Nullable<string>;
    focal_user_id?: Nullable<string>;
    intra_user_id?: Nullable<string>;
    inter_user_id?: Nullable<string>;
    village?: Nullable<string>;
    name?: Nullable<string>;
    number?: Nullable<string>;
    event_date?: Nullable<DateTime>;
    form_status?: Nullable<number>;
    form_type?: Nullable<FormType>;
    query_status?: Nullable<queryStatus>;
    status?: Nullable<Status>;
    id?: Nullable<number>;
    deletedAt?: Nullable<DateTime>;
}

export interface FilterCommonInput {
    user_type?: Nullable<UserType>;
    user_id: number;
    form_type?: Nullable<FormType>;
}

export interface SignUpUserInput {
    name: string;
    contact: string;
    password: string;
}

export interface UpdateUserInput {
    exampleField?: Nullable<number>;
    id: number;
    name?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<string>;
    contact?: Nullable<string>;
    pic_url?: Nullable<string>;
    role?: Nullable<Role>;
    department?: Nullable<Department>;
    address?: Nullable<string>;
    user_uid?: Nullable<string>;
    status?: Nullable<Status>;
    deletedAt?: Nullable<DateTime>;
}

export interface CreateMarriageInput {
    userId: number;
    user_uid?: Nullable<string>;
    name: string;
    address: string;
    mobile: string;
    email?: Nullable<string>;
    village_id: number;
    from_date: DateTime;
    to_date?: Nullable<DateTime>;
    event_name: string;
    event_address: string;
    relation?: Nullable<string>;
    witness_1_url?: Nullable<string>;
    witness_2_url?: Nullable<string>;
    applicant_uid_url?: Nullable<string>;
    undertaking_url?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    remarks?: Nullable<string>;
    other_remarks?: Nullable<string>;
    status?: Nullable<Status>;
}

export interface UpdateMarriageInput {
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    village_id?: Nullable<number>;
    from_date?: Nullable<DateTime>;
    to_date?: Nullable<DateTime>;
    event_name?: Nullable<string>;
    event_address?: Nullable<string>;
    relation?: Nullable<string>;
    witness_1_url?: Nullable<string>;
    witness_2_url?: Nullable<string>;
    applicant_uid_url?: Nullable<string>;
    undertaking_url?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    remarks?: Nullable<string>;
    other_remarks?: Nullable<string>;
    status?: Nullable<Status>;
    id: number;
    rejection_reason?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    deletedAt?: Nullable<DateTime>;
}

export interface CreateRoadshowInput {
    userId: number;
    user_uid?: Nullable<string>;
    name: string;
    address: string;
    mobile: string;
    email?: Nullable<string>;
    village_id: number;
    from_date: DateTime;
    to_date?: Nullable<DateTime>;
    event_name: string;
    event_address: string;
    route_info?: Nullable<string>;
    relation?: Nullable<string>;
    doc_1_url?: Nullable<string>;
    doc_2_url?: Nullable<string>;
    applicant_uid_url?: Nullable<string>;
    undertaking_url?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    remarks?: Nullable<string>;
    other_remarks?: Nullable<string>;
    status?: Nullable<Status>;
}

export interface UpdateRoadshowInput {
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    village_id?: Nullable<number>;
    from_date?: Nullable<DateTime>;
    to_date?: Nullable<DateTime>;
    event_name?: Nullable<string>;
    event_address?: Nullable<string>;
    route_info?: Nullable<string>;
    relation?: Nullable<string>;
    doc_1_url?: Nullable<string>;
    doc_2_url?: Nullable<string>;
    applicant_uid_url?: Nullable<string>;
    undertaking_url?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    remarks?: Nullable<string>;
    other_remarks?: Nullable<string>;
    status?: Nullable<Status>;
    id: number;
    rejection_reason?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    deletedAt?: Nullable<DateTime>;
}

export interface CreateReligiousInput {
    userId: number;
    user_uid?: Nullable<string>;
    name: string;
    address: string;
    mobile: string;
    email?: Nullable<string>;
    village_id: number;
    from_date: DateTime;
    to_date?: Nullable<DateTime>;
    event_name: string;
    event_address: string;
    route_info?: Nullable<string>;
    relation?: Nullable<string>;
    doc_1_url?: Nullable<string>;
    doc_2_url?: Nullable<string>;
    applicant_uid_url?: Nullable<string>;
    undertaking_url?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    remarks?: Nullable<string>;
    other_remarks?: Nullable<string>;
    status?: Nullable<Status>;
}

export interface UpdateReligiousInput {
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    village_id?: Nullable<number>;
    from_date?: Nullable<DateTime>;
    to_date?: Nullable<DateTime>;
    event_name?: Nullable<string>;
    event_address?: Nullable<string>;
    route_info?: Nullable<string>;
    relation?: Nullable<string>;
    doc_1_url?: Nullable<string>;
    doc_2_url?: Nullable<string>;
    applicant_uid_url?: Nullable<string>;
    undertaking_url?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    remarks?: Nullable<string>;
    other_remarks?: Nullable<string>;
    status?: Nullable<Status>;
    id: number;
    rejection_reason?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    deletedAt?: Nullable<DateTime>;
}

export interface CreateQueryInput {
    stage: FormType;
    form_id: number;
    form_status: number;
    from_user_id: number;
    to_user_id: number;
    query_type: QueryType;
    query_status: QueryStatus;
    remark: string;
    doc_url?: Nullable<string>;
    status?: Nullable<Status>;
}

export interface UpdateQueryInput {
    stage: FormType;
    form_id: number;
    form_status: number;
    from_user_id: number;
    to_user_id: number;
    query_type: QueryType;
    query_status: QueryStatus;
    remark: string;
    doc_url?: Nullable<string>;
    status?: Nullable<Status>;
    id: number;
    deletedAt?: Nullable<DateTime>;
}

export interface CreateCommonInput {
    form_id: number;
    user_id: number;
    auth_user_id: string;
    focal_user_id: string;
    intra_user_id: string;
    inter_user_id: string;
    village: string;
    name: string;
    number: string;
    event_date: DateTime;
    form_status: number;
    form_type?: Nullable<FormType>;
    query_status?: Nullable<queryStatus>;
    status?: Nullable<Status>;
}

export interface UpdateCommonInput {
    form_id?: Nullable<number>;
    user_id?: Nullable<number>;
    auth_user_id?: Nullable<string>;
    focal_user_id?: Nullable<string>;
    intra_user_id?: Nullable<string>;
    inter_user_id?: Nullable<string>;
    village?: Nullable<string>;
    name?: Nullable<string>;
    number?: Nullable<string>;
    event_date?: Nullable<DateTime>;
    form_status?: Nullable<number>;
    form_type?: Nullable<FormType>;
    query_status?: Nullable<queryStatus>;
    status?: Nullable<Status>;
    id?: Nullable<number>;
    deletedAt?: Nullable<DateTime>;
}

export interface User {
    id: number;
    name?: Nullable<string>;
    email?: Nullable<string>;
    password: string;
    contact?: Nullable<string>;
    otp?: Nullable<string>;
    pic_url?: Nullable<string>;
    address?: Nullable<string>;
    user_uid?: Nullable<string>;
    role: Role;
    department: Department;
    status: Status;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
}

export interface Marriage {
    id: number;
    userId: number;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    email?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    village_id?: Nullable<number>;
    from_date?: Nullable<DateTime>;
    to_date?: Nullable<DateTime>;
    event_name?: Nullable<string>;
    event_address?: Nullable<string>;
    relation?: Nullable<string>;
    witness_1_url?: Nullable<string>;
    witness_2_url?: Nullable<string>;
    applicant_uid_url?: Nullable<string>;
    undertaking_url?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree: Agree;
    remarks?: Nullable<string>;
    other_remarks?: Nullable<string>;
    rejection_reason?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    certificate_id?: Nullable<Status>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    status: Status;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
}

export interface Roadshow {
    id: number;
    userId: number;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    email?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    village_id?: Nullable<number>;
    from_date?: Nullable<DateTime>;
    to_date?: Nullable<DateTime>;
    event_name?: Nullable<string>;
    event_address?: Nullable<string>;
    route_info?: Nullable<string>;
    relation?: Nullable<string>;
    doc_1_url?: Nullable<string>;
    doc_2_url?: Nullable<string>;
    applicant_uid_url?: Nullable<string>;
    undertaking_url?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree: Agree;
    remarks?: Nullable<string>;
    other_remarks?: Nullable<string>;
    rejection_reason?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    certificate_id?: Nullable<Status>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    status: Status;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
}

export interface Religious {
    id: number;
    userId: number;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    email?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    village_id?: Nullable<number>;
    from_date?: Nullable<DateTime>;
    to_date?: Nullable<DateTime>;
    event_name?: Nullable<string>;
    event_address?: Nullable<string>;
    route_info?: Nullable<string>;
    relation?: Nullable<string>;
    doc_1_url?: Nullable<string>;
    doc_2_url?: Nullable<string>;
    applicant_uid_url?: Nullable<string>;
    undertaking_url?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree: Agree;
    remarks?: Nullable<string>;
    other_remarks?: Nullable<string>;
    rejection_reason?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    certificate_id?: Nullable<Status>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    status: Status;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
}

export interface Auth {
    token: string;
    id: number;
    design_point_id?: Nullable<number>;
    name?: Nullable<string>;
    email?: Nullable<string>;
    password: string;
    contact?: Nullable<string>;
    otp?: Nullable<string>;
    pic_url?: Nullable<string>;
    access_kay?: Nullable<string>;
    role: Role;
    department: Department;
    status: Status;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
}

export interface Village {
    id: number;
    name: string;
}

export interface QueryData {
    id: number;
    stage: FormType;
    form_id: number;
    form_status: number;
    from_user_id: number;
    to_user_id: number;
    query_type: QueryType;
    query_status: QueryStatus;
    remark: string;
    doc_url?: Nullable<string>;
    status: Status;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
    from_user?: Nullable<User>;
    to_user?: Nullable<User>;
}

export interface Common {
    id: number;
    form_id: number;
    user_id: number;
    auth_user_id?: Nullable<string>;
    focal_user_id?: Nullable<string>;
    intra_user_id?: Nullable<string>;
    inter_user_id?: Nullable<string>;
    village: string;
    name: string;
    number: string;
    event_date: DateTime;
    form_status: number;
    form_type: FormType;
    query_status: queryStatus;
    status: Status;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt: DateTime;
}

export interface FileCount {
    MARRIAGE: number;
    RELIGIOUS: number;
    ROADSHOW: number;
    GENERIC: number;
}

export interface VillageCount {
    count: number;
    village: string;
}

export interface OfficerCount {
    count: number;
    auth_user_id: string;
}

export interface FileProgressDetails {
    pending: number;
    completed: number;
    rejected: number;
}

export interface FileProgress {
    MARRIAGE: FileProgressDetails;
    RELIGIOUS: FileProgressDetails;
    ROADSHOW: FileProgressDetails;
    GENERIC: FileProgressDetails;
}

export interface VillageProgressDetails {
    formType: string;
    count: number;
}

export interface VillageProgress {
    village: string;
    fileCounts: VillageProgressDetails[];
}

export interface IQuery {
    signin(loginUserInput: LoginUserInput): Auth | Promise<Auth>;
    verifyOtp(mobileLoginInput: MobileLoginInput): Auth | Promise<Auth>;
    getUserById(id: number): User | Promise<User>;
    getAllMarriage(): Marriage[] | Promise<Marriage[]>;
    getMarriageById(id: number): Marriage | Promise<Marriage>;
    getAllRoadshow(): Roadshow[] | Promise<Roadshow[]>;
    getRoadshowById(id: number): Roadshow | Promise<Roadshow>;
    getAllReligious(): Religious[] | Promise<Religious[]>;
    getReligiousById(id: number): Religious | Promise<Religious>;
    getAllVillage(): Village[] | Promise<Village[]>;
    getVillageById(id: number): Village | Promise<Village>;
    getAllQuery(): QueryData[] | Promise<QueryData[]>;
    getQueryById(id: number): QueryData | Promise<QueryData>;
    searchQuery(searchQueryInput: SearchQueryInput): QueryData[] | Promise<QueryData[]>;
    getAllCommon(): Common[] | Promise<Common[]>;
    getAllCommonById(id: number): Common | Promise<Common>;
    searchCommon(searchCommonInput: SearchCommonInput): Common[] | Promise<Common[]>;
    filterCommon(filterCommonInput: FilterCommonInput): Common[] | Promise<Common[]>;
    getFileCount(): FileCount | Promise<FileCount>;
    villageFileCount(): VillageCount[] | Promise<VillageCount[]>;
    officerFileCount(): OfficerCount[] | Promise<OfficerCount[]>;
    officerFileProgress(): FileProgress | Promise<FileProgress>;
    villageFileProgress(): VillageProgress[] | Promise<VillageProgress[]>;
}

export interface IMutation {
    signup(signUpUserInput: SignUpUserInput): Auth | Promise<Auth>;
    mobileLogin(mobileLoginInput: MobileLoginInput): Auth | Promise<Auth>;
    updateUserById(updateUserInput: UpdateUserInput): User | Promise<User>;
    createMarriage(createMarriageInput: CreateMarriageInput): Marriage | Promise<Marriage>;
    updateMarriageById(updateMarriageInput: UpdateMarriageInput): Marriage | Promise<Marriage>;
    deleteMarriageById(updateMarriageInput: UpdateMarriageInput): Marriage | Promise<Marriage>;
    createRoadshow(createRoadshowInput: CreateRoadshowInput): Roadshow | Promise<Roadshow>;
    updateRoadshowById(updateRoadshowInput: UpdateRoadshowInput): Roadshow | Promise<Roadshow>;
    deleteRoadshowById(updateRoadshowInput: UpdateRoadshowInput): Roadshow | Promise<Roadshow>;
    createReligious(createReligiousInput: CreateReligiousInput): Religious | Promise<Religious>;
    updateReligiousById(updateReligiousInput: UpdateReligiousInput): Religious | Promise<Religious>;
    deleteReligiousById(updateReligiousInput: UpdateReligiousInput): Religious | Promise<Religious>;
    createQuery(createQueryInput: CreateQueryInput): QueryData | Promise<QueryData>;
    updateQueryById(updateQueryInput: UpdateQueryInput): QueryData | Promise<QueryData>;
    deleteQueryById(updateQueryInput: UpdateQueryInput): QueryData | Promise<QueryData>;
    createCommon(createCommonInput: CreateCommonInput): Common | Promise<Common>;
    updateCommonById(updateCommonInput: UpdateCommonInput): Common | Promise<Common>;
    deleteCommonById(updateCommonInput: UpdateCommonInput): Common | Promise<Common>;
}

export type DateTime = any;
type Nullable<T> = T | null;
