/*

      
      April 28, 1998                    20
      !!! SDIF VERSION 3 DOCUMENT !!!
      
      D3 -- Individual Information Record

           Purpose: Contains additional information that is not 
            included in pre version 3 SDI formats.
      
      This record provides space for the new USS# as well as the 
      swimmers preferred first name. For meet files this record will 
      follow the D0 record and the F0 record if relays are included.
      A swimmer with multiple D0 records will have one D3 record 
      following his/her first D0 record.

      start/
      length   Mand   Type    Description
     ---------------------------------------------------------------- 
      1/2      M1     CONST   "D3"
      
      3/14     M2     USSNUM  USS# (new)

      17/15           ALPHA   preferred first name
     
      32/2      *     CODE    ethnicity code 026
      
      34/1      *     LOGICAL Junior High School                
      
      35/1      *     LOGICAL Senior High School
      
      36/1      *     LOGICAL YMCA/YWCA
      
      37/1      *     LOGICAL College
      
      38/1      *     LOGICAL Summer Swim League
      
      39/1      *     LOGICAL Masters
      
      40/1      *     LOGICAL Disabled Sports Organizations
      
      41/1      *     LOGICAL Water Polo
      
      42/1      *     LOGICAL None
      
      43/118                  future use

*/

import { Entry, LineProviderQueue } from "./utils";
const lp = new LineProviderQueue("D3")
    .entry(1, 2, "Individual Information Record")
    .entry(3, 14, "USS# (new)")
    .entry(17, 15, "preferred first name")
    .entry(32, 2, "ethnicity code")
    .entry(34, 1, "Junior High School")
    .entry(35, 1, "Senior High School")
    .entry(36, 1, "YMCA/YWCA")
    .entry(37, 1, "College")
    .entry(38, 1, "Summer Swim League")
    .entry(39, 1, "Masters")
    .entry(40, 1, "Disabled Sports Organizations")
    .entry(41, 1, "Water Polo")
    .entry(42, 1, "None")
    .entry(43, 118, "future use");

export const parseD3 = (line: string): Entry[] => {
    return lp.execute(line);
};



