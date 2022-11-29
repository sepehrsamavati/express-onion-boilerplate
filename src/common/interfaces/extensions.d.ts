declare interface Array {
    remove(item: any): Array;
    findDistinct(key: string): Array;
}

declare interface String {
    toPersianDigits() : String;
    toEnglishDigits() : Number;
    langIsRTL() : Boolean;
    capitalize() : String;
    localization(lang: string) : String;
    multiLangHelper(replaceWith: string | string[], lang: string) : String;
}