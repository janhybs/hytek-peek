/*
  April 28, 1998                    13
      !!! SDIF VERSION 3 DOCUMENT !!!

      D0 -- Individual Event Record

           Purpose:  Identify the athlete by name, registration number,
             birth date and gender.  Identify the stroke,
             distance, event number and time of the swims.

      This record is used to identify the athlete and the individual
      event.  When used, one individual event record would be
      submitted for each swimmer entered in an individual event.  The
      athlete name, USS registration number, birth date and gender
      code are required.  Fields for the stroke, distance, event
      number, age range, and date of swim are also required.
      Additional fields provide for the citizenship, age or class, 
      seed time, prelim time, swim off time, finals time and pool
      lanes used in competition.

      NOTE:  Individual event records must be preceded by at least one
      C1 team ID record and one C2 team entry record.  If these two 
      records are missing, the individual is assumed to be attached
      to the previous "team" that has proper coding.  Athlete
      registration data is not available to meet management programs
      and proper coding is essential.

      start/   
      length   Mand   Type   Description
     ----------------------------------------------------------------
      1/2      M1     CONST  "D0"

      3/1      M2     CODE   ORG Code 001, table checked

      4/8                    future use

      12/28    M1     NAME   swimmer name 

      40/12    M2     ALPHA  USS#

      52/1            CODE   ATTACH Code 016, table checked

      53/3            CODE   CITIZEN Code 009, table checked

      56/8     M2     DATE   swimmer birth date

      64/2            ALPHA  swimmer age or class (such as Jr or Sr)

      66/1     M1     CODE   SSS Code 010, table checked

      67/1     M1#    CODE   EVENT SSS Code 011, table checked

      68/4     M1#    INT    event distance

      72/1     M1#    CODE   STROKE Code 012, table checked

      73/4            ALPHA  Event Number

      77/4     M1#    CODE   EVENT AGE Code 025, table checked

      81/8     M2     DATE   date of swim

      89/8            TIME   seed time

      97/1      *     CODE   COURSE Code 013, table checked

      98/8            TIME   prelim time

      106/1     *     CODE   COURSE Code 013, table checked

      107/8           TIME   swim-off time

      115/1     *     CODE   COURSE Code 013, table checked

      116/8           TIME   finals time

      124/1     *     CODE   COURSE Code 013, table checked

      125/2           INT    prelim heat number

      127/2           INT    prelim lane number

      129/2           INT    finals heat number

      131/2           INT    finals lane number

      133/3     **    INT    prelim place ranking

	  136/3     **    INT    finals place ranking

	  139/4     **    DEC    points scored from finals

	  143/2           CODE   EVENT TIME CLASS Code 014, table checked

	  145/1           ALPHA  flight status of swimmer (subdivision
				 of Time Standard)

	  146/15                 future use
      
 */
import { Entry, LineProviderQueue } from "./utils";
const lp = new LineProviderQueue("D0")
    .entry(1, 2, "Individual Event Record")
    .entry(3, 1, "ORG Code 001")
    .entry(4, 8, "future use")
    .entry(12, 28, "swimmer name")
    .entry(40, 12, "USS#")
    .entry(52, 1, "ATTACH Code 016")
    .entry(53, 3, "CITIZEN Code 009")
    .entry(56, 8, "swimmer birth date")
    .entry(64, 2, "swimmer age or class (such as Jr or Sr)")
    .entry(66, 1, "SEX Code 010")
    .entry(67, 1, "EVENT SEX Code 011")
    .entry(68, 4, "event distance")
    .entry(72, 1, "STROKE Code 012")
    .entry(73, 4, "Event Number")
    .entry(77, 4, "EVENT AGE Code 025")
    .entry(81, 8, "date of swim")
    .entry(89, 8, "seed time")
    .entry(97, 1, "COURSE Code 013")
    .entry(98, 8, "prelim time")
    .entry(106, 1, "COURSE Code 013")
    .entry(107, 8, "swim-off time")
    .entry(115, 1, "COURSE Code 013")
    .entry(116, 8, "finals time")
    .entry(124, 1, "COURSE Code 013")
    .entry(125, 2, "prelim heat number")
    .entry(127, 2, "prelim lane number")
    .entry(129, 2, "finals heat number")
    .entry(131, 2, "finals lane number")
    .entry(133, 3, "prelim place ranking")
    .entry(136, 3, "finals place ranking")
    .entry(139, 4, "points scored from finals")
    .entry(143, 2, "EVENT TIME CLASS Code 014")
    .entry(145, 1, "flight status of swimmer (subdivision of Time Standard)");

export const parseD0 = (line: string): Entry[] => {
    return lp.execute(line);
}