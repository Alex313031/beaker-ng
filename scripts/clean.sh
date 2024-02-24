#!/bin/bash

# Copyright(c) 2024 Alex313031

YEL='\033[1;33m' # Yellow
CYA='\033[1;96m' # Cyan
RED='\033[1;31m' # Red
GRE='\033[1;32m' # Green
c0='\033[0m' # Reset Text
bold='\033[1m' # Bold Text
underline='\033[4m' # Underline Text

# Error handling
yell() { echo "$0: $*" >&2; }
die() { yell "$*"; exit 111; }
try() { "$@" || die "${RED}Failed $*"; }

printf "\n" &&
printf "${bold}${GRE}Script to clean Beaker-ng artifacts.${c0}\n" &&
printf "\n" &&
printf "${bold}${YEL} Cleaning node_modules and build artifacts...${c0}\n" &&
	
npm run distclean &&
npm run clean &&

printf "\n" &&
printf "${bold}${GRE}Done.\n" &&
printf "\n" &&
tput sgr0
