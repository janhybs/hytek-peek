/*
      April 28, 1998                    12
      !!! SDIF VERSION 3 DOCUMENT !!!

      C2 -- Team Entry Record

           Purpose:  Identify the team coach and the number of entries
             for the team.

      This record is used to identify the team coach.  When used, one
      team entry record would be submitted with the C1 team ID record.
      The USS team code and team coach field are required.  Additional
      fields provide for the number of individual swimmers, number of
      splash records, number of relay entries, number of relay name
      entries and number of split records.

      start/   
      length   Mand   Type   Description
     ----------------------------------------------------------------
      1/2      M1     CONST  "C2"

      3/1      M2     CODE   ORG Code 001, table checked

      4/8                    future use

      12/6     M2     CODE   TEAM Code 006

      18/30    M2     ALPHA  coach name

      48/12           PHONE  coach phone

      60/6            INT    number of entries (from this team) in the
                 individual events, corresponds to number of
                 D0 records

      66/6            INT    number of different athletes on team

      72/5            INT    number of entries (from this team) in the
                 relay events, corresponds to number of E0
                 records

      77/6            INT    number of relay swimmer entries (from this
                 team), corresponds to number of F0 records

      83/6            INT    number of split records (from this team)
                 in relay and individual events, corresponds
                 to number of G0 records
      
      89/16           ALPHA  short team name for display purposes

      105/45                 future use

      150/1           ALPHA  optional 5th char of team code

      151/10                 future use
 */

import { Entry, LineProviderQueue } from "./utils";
const lp = new LineProviderQueue("C2")
    .entry(1, 2, "Team Entry Record")
    .entry(3, 1, "ORG Code 001")
    .entry(4, 8, "future use")
    .entry(12, 6, "TEAM Code 006")
    .entry(18, 30, "coach name")
    .entry(48, 12, "coach phone")
    .entry(60, 6, "number of entries (from this team) in the individual events")
    .entry(66, 6, "number of different athletes on team")
    .entry(72, 5, "number of entries (from this team) in the relay events")
    .entry(77, 6, "number of relay swimmer entries (from this team)")
    .entry(83, 6, "number of split records (from this team) in relay and individual events")
    .entry(89, 16, "short team name for display purposes")
    .entry(105, 45, "future use")
    .entry(150, 1, "optional 5th char of team code")
    .entry(151, 10, "future use");

export const parseC2 = (line: string): Entry[] => {
    return lp.execute(line);
};
