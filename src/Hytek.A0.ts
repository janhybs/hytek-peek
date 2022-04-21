/*


	  April 28, 1998                     8
	  !!! SDIF VERSION 3 DOCUMENT !!!

	  A0 -- File Description Record

	       Purpose:  Identify the file and the type of data to be
			 transmitted.  Contact person and phone number
			 included to assist with use of information on the
			 file.

	  This record is mandatory for each transfer of data within this
	  file structure.  Each file begins with this record and each file
	  has only one record of this type.  

	  start/   
	  length   Mand   Type   Description
	 ----------------------------------------------------------------
	  1/2       M1*   CONST  "A0"

	  3/1       M2*   CODE   ORG Code 001, table checked

	  4/8             ALPHA  SDIF version number (same format as the 
				 version number from the title page)

	  12/2      M1*   CODE   FILE Code 003, table checked

	  14/30                  future use

	  44/20      *    ALPHA  software name

	  64/10      *    ALPHA  software version

	  74/20     M1*   ALPHA  contact name (person supplying or
				 sending data)

	  94/12     M1*   PHONE  contact phone (area code and phone
				 number of contact name in 74/20)

	  106/8     M1*   DATE   file creation or update

	  114/42                 future use
	  
	  156/2           ALPHA  submitted by LSC - for Top 16

	  158/3                  future use

*/


import { Entry, LineProviderQueue } from "./utils";

const lp = new LineProviderQueue("A0")
	.entry(1, 2, "File Description Record")
	.entry(3, 1, "org code 001")
	.entry(4, 8, "SDIF version number")
	.entry(12, 2, "file code 003")
	.entry(14, 30, "future use")
	.entry(44, 20, "software name")
	.entry(64, 10, "software version")
	.entry(74, 20, "contact name")
	.entry(94, 12, "contact phone")
	.entry(106, 8, "file creation or update")
	.entry(114, 42, "future use")
	.entry(156, 2, "submitted by LSC")
	.entry(158, 3, "future use");

export const parseA0 = (line: string): Entry[] => {
	return lp.execute(line);
};