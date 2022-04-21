/*




      April 28, 1998                     9
      !!! SDIF VERSION 3 DOCUMENT !!!

      B1 -- Meet Record

           Purpose:  Identify the meet name, address, and dates.

      This record is used to identify the meet name and address.  The
      meet name is required, plus the city, state, meet type, start
      and end dates.  Additional fields provide for the street address,
      postal code and country code.  Each file may only have one
      record of this type.

      start/   
      length   Mand   Type   Description
     ----------------------------------------------------------------
      1/2      M1     CONST  "B1"

      3/1      M2     CODE   ORG Code 001, table checked

      4/8                    future use

      12/30    M1     ALPHA  meet name

      42/22           ALPHA  meet address line one

      64/22           ALPHA  meet address line two

      86/20    M2     ALPHA  meet city

      106/2    M2     USPS   meet state

      108/10          ALPHA  Postal Code, meet zip or foreign code

      118/3           CODE   COUNTRY Code 004, table checked

      121/1    M2     CODE   MEET Code 005, table checked

      122/8    M1     DATE   meet start

      130/8    M2     DATE   meet end

      138/4           INT    altitude of pool in feet above sea level

      142/8                  future use

      150/1           CODE   COURSE Code 013, table checked, default
                 course set up in exporting software

      151/10                 future use


*/

import { Entry, LineProviderQueue } from "./utils";
const lp = new LineProviderQueue("B1")
    .entry(1, 2, "Meet Record")
    .entry(3, 1, "ORG Code 001")
    .entry(4, 8, "future use")
    .entry(12, 30, "meet name")
    .entry(42, 22, "meet address line one")
    .entry(64, 22, "meet address line two")
    .entry(86, 20, "meet city")
    .entry(106, 2, "meet state")
    .entry(108, 10, "Postal Code, meet zip or foreign code")
    .entry(118, 3, "COUNTRY Code 004")
    .entry(121, 2, "MEET Code 005")
    .entry(122, 8, "meet start")
    .entry(130, 8, "meet end")
    .entry(138, 4, "altitude of pool in feet above sea level")
    .entry(142, 8, "future use")
    .entry(150, 1, "COURSE Code 013")
    .entry(151, 10, "future use");

export const parseB1 = (line: string): Entry[] => {
    return lp.execute(line);
};