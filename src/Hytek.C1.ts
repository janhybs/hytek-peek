/*
	  April 28, 1998                    11
	  !!! SDIF VERSION 3 DOCUMENT !!!

	  C1 -- Team Id Record

	       Purpose:  Identify the team name, code and address.  Region
			 code defines USS region for team.

	  This record is used to identify the team name, team code, plus
	  region.  When used, more than one team record can be transmitted
	  for a single meet.  The team name, USS team code and team
	  abbreviation are required.  The USS region code is also required.
	  Additional fields provide for the street address, city, state,
	  postal code, and country code.

	  start/   
	  length   Mand   Type   Description
	 ----------------------------------------------------------------
	  1/2      M1     CONST  "C1"

	  3/1      M2     CODE   ORG Code 001, table checked

	  4/8                    future use

	  12/6     M1     CODE   TEAM Code 006

	  18/30    M1     ALPHA  full team name

	  48/16           ALPHA  abbreviated team name

	  64/22           ALPHA  team address line one

	  86/22           ALPHA  team address line two

	  108/20          ALPHA  team city

	  128/2           USPS   team state

	  130/10          ALPHA  Postal Code, team zip or foreign code

	  140/3           CODE   COUNTRY Code 004, table checked

	  143/1           CODE   REGION Code 007, table checked

	  144/6                  future use

	  150/1           ALPHA  optional 5th char of team code

	  151/10                  future use

 */

import { Entry, LineProviderQueue } from "./utils";

const lp = new LineProviderQueue("C1")
	.entry(1, 2, "Team Id Record")
	.entry(3, 1, "ORG Code 001")
	.entry(4, 8, "future use")
	.entry(12, 6, "TEAM Code 006")
	.entry(18, 30, "full team name")
	.entry(48, 16, "abbreviated team name")
	.entry(64, 22, "team address line one")
	.entry(86, 22, "team address line two")
	.entry(108, 20, "team city")
	.entry(128, 2, "team state")
	.entry(130, 10, "Postal Code, team zip or foreign code")
	.entry(140, 3, "COUNTRY Code 004")
	.entry(143, 1, "REGION Code 007")
	.entry(144, 6, "future use")
	.entry(150, 1, "optional 5th char of team code")
	.entry(151, 10, "future use");

export const parseC1 = (line: string): Entry[] => {
    return lp.execute(line);
}