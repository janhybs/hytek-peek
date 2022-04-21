/*
      April 28, 1998                    30
      !!! SDIF VERSION 3 DOCUMENT !!!

      Z0 -- File Terminator Record

           Purpose:  Identify the logical end of file for a file
             transmission.  Record statistics and swim
             statistics are listed for convenience.

      This record is mandatory in each file.  Each file ends with this
      record and each file has only one record of this type.  The first
      four fields are mandatory.  Additional fields provide for text
      and record counts.

      start/   
      length   Mand   Type   Description
     ----------------------------------------------------------------
      1/2      M1     CONST  "Z0"

      3/1      M2     CODE   ORG Code 001, table checked

      4/8                    future use

      12/2     M1     CODE   FILE Code 003, table checked

      14/30           ALPHA  notes (additional file info)

      44/3            INT    number of B records

      47/3            INT    number of different meets

      50/4            INT    number of C records

      54/4            INT    number of different teams

      58/6            INT    number of D records

      64/6            INT    number of different swimmers

      70/5            INT    number of E records

      75/6            INT    number of F records

      81/6            INT    number of G records

      87/5            INT    batch number
      
      92/3            INT    number of new members

      95/3            INT    number of renew members

      98/3            INT    number of member changes

      101/3           INT    number of member deletes

      104/57                 future use

*/

import { Entry, LineProviderQueue } from "./utils";
const lp = new LineProviderQueue("Z0")
    .entry(1, 2, "File Terminator Record")
    .entry(3, 1, "ORG Code 001")
    .entry(4, 8, "future use")
    .entry(12, 2, "FILE Code 003")
    .entry(14, 30, "notes (additional file info)")
    .entry(44, 3, "number of B records")
    .entry(47, 3, "number of different meets")
    .entry(50, 4, "number of C records")
    .entry(54, 4, "number of different teams")
    .entry(58, 6, "number of D records")
    .entry(64, 6, "number of different swimmers")
    .entry(70, 5, "number of E records")
    .entry(75, 6, "number of F records")
    .entry(81, 6, "number of G records")
    .entry(87, 5, "batch number")
    .entry(92, 3, "number of new members")
    .entry(95, 3, "number of renew members")
    .entry(98, 3, "number of member changes")
    .entry(101, 3, "number of member deletes")
    .entry(104, 57, "future use");

export const parseZ0 = (line: string): Entry[] => {
    return lp.execute(line);
};