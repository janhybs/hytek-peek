/*


      April 28, 1998                    10
      !!! SDIF VERSION 3 DOCUMENT !!!

      B2 -- Meet Host Record

           Purpose:  Identify the meet host or hosts, and host address.

      This record is used to identify the meet host or hosts and the
      host address.  The meet host name is required.  Additional
      fields provide for the street address, city, state, postal code,
      country code and phone number.

      start/   
      length   Mand   Type   Description
     ----------------------------------------------------------------
      1/2      M1     CONST  "B2"

      3/1      M2     CODE   ORG Code 001, table checked

      4/8                    future use

      12/30    M2     ALPHA  meet host name

      42/22           ALPHA  meet address line one

      64/22           ALPHA  meet address line two

      86/20           ALPHA  meet city

      106/2           USPS   meet state

      108/10          ALPHA  Postal Code, meet zip or foreign code

      118/3           CODE   COUNTRY Code 004, table checked

      121/12          PHONE  meet host phone

      133/28                 future use

*/


import { Entry, LineProviderQueue } from "./utils";
const lp = new LineProviderQueue("B2")
    .entry(1, 2, "Meet Host Record")
    .entry(3, 1, "ORG Code 001")
    .entry(4, 12, "future use")
    .entry(12, 30, "meet host name")
    .entry(42, 22, "meet address line one")
    .entry(64, 22, "meet address line two")
    .entry(86, 20, "meet city")
    .entry(106, 2, "meet state")
    .entry(108, 10, "Postal Code, meet zip or foreign code")
    .entry(118, 3, "COUNTRY Code 004")
    .entry(121, 12, "meet host phone")
    .entry(133, 28, "future use")

export const parseB2 = (line: string): Entry[] => {
    return lp.execute(line);
};