/*

      April 28, 1998                    18
      !!! SDIF VERSION 3 DOCUMENT !!!

      D2 -- Individual Contact Record

           Purpose:  Identify the athlete by name.  Identify mailing
             and contact information.

      This record is used to identify the athlete and his/her contact
      information. When used, one individual contact record would be
      submitted for each swimmer in the file.  The athlete name is
      required.  

      start/   
      length   Mand   Type   Description
     ----------------------------------------------------------------
      1/2      M1*    CONST  "D2"

      3/1      M2*    CODE   ORG Code 001, table checked

      4/8                    future use

      12/6       *    CODE   TEAM Code 006

      18/1            ALPHA  optional 5th char of team code

      19/28    M1*    NAME   swimmer name

      47/30           ALPHA  alternate mailing name

      77/30      *    ALPHA  mailing address (street)

      107/20     *    ALPHA  mailing city

      127/2      *    USPS   mailing state

      129/12          ALPHA  mailing country

      141/10     *    ALPHA  Postal Code, zip or foreign code

      151/3           CODE   COUNTRY Code 004, table checked

      154/1           CODE   REGION Code 007, table checked

      155/1      *    CODE   ANSWER Code 023, Is swimmer also a member
                 of another FINA federation?
      
      156/1      *    CODE   SEASON Code 022, table checked, show which
                 season swimmer is registered for

      157/4                  future use


*/

import { Entry, LineProviderQueue } from "./utils";
const lp = new LineProviderQueue("D2")
    .entry(1, 2, "Individual Contact Record")
    .entry(3, 1, "ORG Code 001")
    .entry(4, 8, "future use")
    .entry(12, 6, "TEAM Code 006")
    .entry(18, 1, "optional 5th char of team code")
    .entry(19, 28, "swimmer name")
    .entry(47, 30, "alternate mailing name")
    .entry(77, 30, "mailing address (street)")
    .entry(107, 20, "mailing city")
    .entry(127, 2, "mailing state")
    .entry(129, 12, "mailing country")
    .entry(141, 10, "Postal Code, zip or foreign code")
    .entry(151, 3, "COUNTRY Code 004")
    .entry(154, 1, "REGION Code 007")
    .entry(155, 1, "ANSWER Code 023, Is swimmer also a member of another FINA federation?")
    .entry(156, 1, "SEASON Code 022, table checked, show which season swimmer is registered for")
    .entry(157, 4, "future use");

export const parseD2 = (line: string): Entry[] => {
    return lp.execute(line);
};