/*


      April 28, 1998                    25
      !!! SDIF VERSION 3 DOCUMENT !!!

      G0 -- Splits Record

           Purpose:  Identify the athletes in an event by name and USS
             registration number.  Identify the split distance,
             number of splits and the split times of the swims.

      This record is used to identify the athletes in an event and the
      split times.  When used, one splits record would be submitted for
      each event that an athlete entered in a meet.  The athlete name,
      USS registration code, and split distance are required.    
      A split type code is required to identify the split
      as an interval or cumulative time.  Ten time fields are provided
      to record the splits, and multiple records may be used to
      complete all splits for a long-distance event.

      NOTE:  Splits records must be preceded by at least one D0 
      individual event record or one F0 relay name record.  If this 
      record is missing, there is no way to connect the splits with
      the swim.

      start/   
      length   Mand   Type   Description
     ----------------------------------------------------------------
      1/2      M1     CONST  "G0"

      3/1      M2     CODE   ORG Code 001, table checked

      4/12                   future use

      16/28           NAME   swimmer name.  If name is not available,
                 enter "NO SWIMMER NAME" or some other
                 meaningful string

      44/12           ALPHA  USS#

      56/1     M1     INT    sequence number to order multiple splits
                 records for one athlete and one event

      57/2     M1     INT    total number of splits for this event,
      
      59/4     M1     INT    split distance

      63/1     M1     CODE   SPLIT Code 015, table checked

      64/8            TIME   split time

      72/8            TIME   split time

      80/8            TIME   split time

      88/8            TIME   split time

      96/8            TIME   split time

      104/8           TIME   split time

      112/8           TIME   split time

      120/8           TIME   split time

      128/8           TIME   split time

      136/8           TIME   split time

      144/1           CODE   PRELIMS/FINALS Code 019, table checked

      145/16                 future use

*/


import { Entry, LineProviderQueue } from "./utils";
const lp = new LineProviderQueue("G0")
    .entry(1, 2, "Splits Record")
    .entry(3, 1, "ORG Code 001")
    .entry(4, 12, "future use")
    .entry(16, 28, "swimmer name.  If name is not available, enter NO SWIMMER NAME or some other meaningful string")
    .entry(44, 12, "USS#")
    .entry(56, 1, "sequence number to order multiple splits records for one athlete and one event")
    .entry(57, 2, "total number of splits for this event")
    .entry(59, 4, "split distance")
    .entry(63, 1, "SPLIT Code 015, table checked")
    .entry(64, 8, "split time")
    .entry(72, 8, "split time")
    .entry(80, 8, "split time")
    .entry(88, 8, "split time")
    .entry(96, 8, "split time")
    .entry(104, 8, "split time")
    .entry(112, 8, "split time")
    .entry(120, 8, "split time")
    .entry(128, 8, "split time")
    .entry(136, 8, "split time")
    .entry(144, 1, "PRELIMS/FINALS Code 019, table checked")
    .entry(145, 16, "future use");

export const parseG0 = (line: string): Entry[] => {
    return lp.execute(line);
};