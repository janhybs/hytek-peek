/*
      
      April 28, 1998                    16
      !!! SDIF VERSION 3 DOCUMENT !!!

      D1 -- Individual Administrative Record

           Purpose:  Identify the athlete by name, registration number,
             birth date and gender.  Identify other
             administrative information.

      This record is used to identify the athlete and his/her
      administrative information. When used, one individual
      administrative record would be submitted for each swimmer in
      the file.  The athlete name, USS registration number, birth
      date and gender code are required.

      start/   
      length   Mand   Type   Description
     ----------------------------------------------------------------
      1/2      M1*    CONST  "D1"

      3/1      M2*    CODE   ORG Code 001, table checked

      4/8                    future use

      12/6       *    CODE   TEAM Code 006

      18/1            ALPHA  optional 5th char of team code

      19/28    M1*    NAME   swimmer name 

      47/1                   future use

      48/12    M2*    ALPHA  USS#

      60/1            CODE   ATTACH Code 016, table checked

      61/3       *    CODE   CITIZEN Code 009, table checked

      64/8     M2*    DATE   swimmer birth date

      72/2            ALPHA  swimmer age or class (such as Jr or Sr)

      74/1     M1*    CODE   SEX Code 010, table checked

      75/30            ALPHA  first admin info field

      105/20     *    ALPHA  fourth admin info field, used in submission
                 of registration data for old member number
                 if inits or birthdate change

      125/12     *    PHONE  first phone number for swimmer

      137/12          PHONE  second phone number for swimmer

      149/8      *    DATE   date swimmer registered with USS

      157/1      *    CODE   MEMBER Code 021, table checked

      158/3                  future use

 */

import { Entry,  LineProviderQueue } from "./utils";
const lp = new LineProviderQueue("D1")
    .entry(1, 2, "Individual Administrative Record")
    .entry(3, 1, "ORG Code 001")
    .entry(4, 8, "future use")
    .entry(12, 6, "TEAM Code 006")
    .entry(18, 1, "optional 5th char of team code")
    .entry(19, 28, "swimmer name")
    .entry(47, 1, "future use")
    .entry(48, 12, "USS#")
    .entry(60, 1, "ATTACH Code 016")
    .entry(61, 3, "CITIZEN Code 009")
    .entry(64, 8, "swimmer birth date")
    .entry(72, 2, "swimmer age or class (such as Jr or Sr)")
    .entry(74, 1, "SEX Code 010")
    .entry(75, 30, "first admin info field")
    .entry(105, 20, "fourth admin info field, used in submission of registration data for old member number if inits or birthdate change")
    .entry(125, 12, "first phone number for swimmer")
    .entry(137, 12, "second phone number for swimmer")
    .entry(149, 8, "date swimmer registered with USS")
    .entry(157, 1, "MEMBER Code 021")
    .entry(158, 3, "future use");

export const parseD1 = (line: string): Entry[] => {
    return lp.execute(line);
};
