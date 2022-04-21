/*

      April 28, 1998                    21
      !!! SDIF VERSION 3 DOCUMENT !!!

      E0 -- Relay Event Record

           Purpose:  Identify the relay team by name, USS team code,
             and gender.  Identify the stroke, distance, event
             number, date and time of the swims.

      This record is used to identify the team and the relay event.
      When used, one relay event record would be submitted for each
      relay squad entered in a relay event.  The relay team name, USS
      team code, and gender code are required.  Fields for the stroke,
      distance, event number, age range, and date of swim, are also
      required.  Additional fields provide for the age or class, seed
      time, prelim time, swim off time, finals time, and pool lanes
      used in competition.

      start/   
      length   Mand   Type   Description
     ----------------------------------------------------------------
      1/2      M1     CONST  "E0"

      3/1      M2     CODE   ORG Code 001, table checked

      4/8                    future use

      12/1     M1     ALPHA  relay team name:  one alpha char to
                 concatenate with the abbreviated team
                 name (48/16) in record C1 -- creates such
                 names as "Dolphins A"

      13/6     M1     CODE   TEAM Code 006

      19/2            INT    number of F0 relay name records to follow

      21/1     M1     CODE   EVENT SEX Code 011, table checked

      22/4     M1     INT    distance of relay

      26/1     M1     CODE   STROKE Code 012, table checked

      27/4            ALPHA  Event Number

      31/4     M1     CODE   EVENT AGE Code 025, table checked

      35/3            INT    total age of all athletes in this event

      38/8     M2     DATE   date of swim

      46/8            TIME   seed time

      54/1      *     CODE   COURSE Code 013, table checked

      55/8            TIME   prelim time

      63/1      *     CODE   COURSE Code 013, table checked

      64/8            TIME   swim-off time

      72/1      *     CODE   COURSE Code 013, table checked

      73/8            TIME   finals time

      81/1      *     CODE   COURSE Code 013, table checked

      82/2            INT    prelim heat number

      84/2            INT    prelim lane number

      86/2            INT    finals heat number

      88/2            INT    finals lane number

      90/3      **    INT    prelim place ranking

      93/3      **    INT    finals place ranking

      96/4      **    DEC    points scored from finals

      100/2           CODE   EVENT TIME CLASS Code 014, table checked

      103/59                 future use
*/

import { Entry, LineProviderQueue } from "./utils";
const lp = new LineProviderQueue("E0")
    .entry(1, 2, "Relay Event Record")
    .entry(3, 1, "ORG Code 001")
    .entry(4, 8, "future use")
    .entry(12, 1, "Relay team name")
    .entry(13, 6, "USS team code")
    .entry(19, 2, "Number of F0 relay name records to follow")
    .entry(21, 1, "Event SEX Code 011")
    .entry(22, 4, "Distance of relay")
    .entry(26, 1, "Stroke Code 012")
    .entry(27, 4, "Event Number")
    .entry(31, 4, "Event Age Code 025")
    .entry(35, 3, "Total age of all athletes in this event")
    .entry(38, 8, "Date of swim")
    .entry(46, 8, "Seed time")
    .entry(54, 1, "Course Code 013")
    .entry(55, 8, "Prelim time")
    .entry(63, 1, "Course Code 013")
    .entry(64, 8, "Swim-off time")
    .entry(72, 1, "Course Code 013")
    .entry(73, 8, "Finals time")
    .entry(81, 1, "Course Code 013")
    .entry(82, 2, "Prelim heat number")
    .entry(84, 2, "Prelim lane number")
    .entry(86, 2, "Finals heat number")
    .entry(88, 2, "Finals lane number")
    .entry(90, 3, "Prelim place ranking")
    .entry(93, 3, "Finals place ranking")
    .entry(96, 4, "Points scored from finals")
    .entry(100, 2, "Event TIME CLASS Code 014")
    .entry(103, 59, "future use");

export const parseE0 = (line: string): Entry[] => {
    return lp.execute(line);
};