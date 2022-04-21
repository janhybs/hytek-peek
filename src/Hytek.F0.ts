/*




      April 28, 1998                    23
      !!! SDIF VERSION 3 DOCUMENT !!!

      F0 -- Relay Name Record

           Purpose:  Identify the athletes on a relay team by name, USS
             registration number, birth date and gender.
             Identify the stroke, distance, event number, date,
             session and time of the swims.

      This record is used to identify the athletes on a relay team and
      the relay order.  When used, one relay name record is submitted
      for each relay athlete entered in a relay event.  Alternates may
      be listed on additional records as an optional method of using
      this record.  The relay team name, USS team code, and gender
      code are required.  The Event ID # field (12/4) is required to
      properly identify the relay team to an event and to further link
      the splits for a relay athlete.  Fields for the stroke, distance,
      event number, age or class, and date of swim, are also required.
      Additional fields provide for the seed time, prelim time, swim
      off time, finals time, and pool lanes used in competition.

      NOTE:  Relay name records must be preceded by at least one E0
      relay event record.  If this record is missing, the athlete on a 
      relay team cannot be attached to the proper relay squad.

      start/   
      length   Mand   Type   Description
     ----------------------------------------------------------------
      1/2      M1     CONST  "F0"

      3/1      M2     CODE   ORG Code 001, table checked

      4/12                   future use
      
      16/6     M1     CODE   TEAM Code 006

      22/1     M1#    ALPHA  relay team name:  one alpha char to
                 concatenate with the team abbreviation in
                 record C1 -- creates such names as
                 "Dolphins A"

      23/28    M1     NAME   swimmer name
      
      51/12    M2     ALPHA  USS#

      63/3            CODE   CITIZEN Code 009, table checked

      66/8     M2     DATE   swimmer's birth date

      74/2            ALPHA  swimmer age or class (such as Jr or Sr)

      76/1     M1     CODE   SEX Code 010, table checked

      77/1     M1     CODE   ORDER Code 024, prelim leg, table checked

      78/1     M1     CODE   ORDER Code 024, swim-off leg, table checked

      79/1     M1     CODE   ORDER Code 024, finals leg, table checked

      80/8            TIME   leg time

      88/1      *     CODE   COURSE Code 013, table checked

      89/4            DEC    automatic take-off time in seconds and
                 hundredths (s.ss)

      93/14    M2     USSNUM USS# (new)

      107/15          ALPHA  preferred first name
      
      122/39                 future use

*/

import { Entry, LineProviderQueue } from "./utils";
const lp = new LineProviderQueue("F0")
    .entry(1, 2, "Relay Name Record")
    .entry(3, 1, "org code 001")
    .entry(4, 12, "future use")
    .entry(16, 6, "team code 006")
    .entry(22, 1, "relay team name")
    .entry(23, 28, "swimmer name")
    .entry(51, 12, "USS#")
    .entry(63, 3, "citizen code 009")
    .entry(66, 8, "birth date")
    .entry(74, 2, "age or class")
    .entry(76, 1, "SEX code 010")
    .entry(77, 1, "prelim leg")
    .entry(78, 1, "swim-off leg")
    .entry(79, 1, "finals leg")
    .entry(80, 8, "leg time")
    .entry(88, 1, "course code 013")
    .entry(89, 4, "take-off time")
    .entry(93, 14, "USS# (new)")
    .entry(107, 15, "preferred first name")
    .entry(122, 39, "future use");

export const parseF0 = (line: string): Entry[] => {
    return lp.execute(line);
};