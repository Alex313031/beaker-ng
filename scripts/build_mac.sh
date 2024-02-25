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

# Set msvs_version for node-gyp on Windows
export MSVS_VERSION="2017" &&
export GYP_MSVS_VERSION="2017" &&
# Download electron binaries here
export ELECTRON_CACHE="${PWD}/electron/bin" &&
export electron_config_cache="${PWD}/electron/bin" &&

# --help
displayHelp () {
	printf "\n" &&
	printf "${bold}${GRE}Script to build Beaker-ng on MacOS.${c0}\n" &&
	printf "${bold}${YEL}Use the --deps flag to install build dependencies.${c0}\n" &&
	printf "${bold}${YEL}Use the --build flag to build Beaker-ng.${c0}\n" &&
	printf "${bold}${YEL}Use the --clean flag to run \`npm run clean\`.${c0}\n" &&
	printf "${bold}${YEL}Use the --distclean flag to remove built packages.${c0}\n" &&
	printf "${bold}${YEL}Use the --burn flag to burnthemall!.${c0}\n" &&
	printf "${bold}${YEL}Use the --dist flag to generate installation packages.${c0}\n" &&
	printf "${bold}${YEL}Use the --dir flag to build an unpacked dir in \`dist\`.${c0}\n" &&
	printf "${bold}${YEL}Use the --help flag to show this help.${c0}\n" &&
	printf "\n"
}
case $1 in
	--help) displayHelp; exit 0;;
esac

# Install prerequisites
installDeps () {
	sudo apt-get install autoconf build-essential fakeroot git libsecret-1-dev libtool libx11-dev libxkbfile-dev m4 make g++ python2 python2.7-dev
}
case $1 in
	--deps) installDeps; exit 0;;
esac

cleanBeaker () {
	printf "\n" &&
	printf "${bold}${YEL} Cleaning node_modules...${c0}\n" &&
	
	npm run clean
}
case $1 in
	--clean) cleanBeaker; exit 0;;
esac

distcleanBeaker () {
	printf "\n" &&
	printf "${bold}${YEL} Cleaning dist...${c0}\n" &&
	
	npm run distclean
}
case $1 in
	--distclean) distcleanBeaker; exit 0;;
esac

buildBeaker () {
# Optimization parameters
export CFLAGS="-DNDEBUG -mavx -maes -O3 -g0 -s -Wno-deprecated-declarations -Wno-implicit-fallthrough -Wno-cast-function-type -Wno-unused-variable" &&
export CXXFLAGS="-DNDEBUG -mavx -maes -O3 -g0 -s -Wno-deprecated-declarations -Wno-implicit-fallthrough -Wno-cast-function-type -Wno-unused-variable" &&
export CPPFLAGS="-DNDEBUG -mavx -maes -O3 -g0 -s -Wno-deprecated-declarations -Wno-implicit-fallthrough -Wno-cast-function-type -Wno-unused-variable" &&
export LDFLAGS="-mavx -maes -s" &&
export VERBOSE=1 &&
export V=1 &&

# Set msvs_version for node-gyp on Windows
export MSVS_VERSION="2017" &&
export GYP_MSVS_VERSION="2017" &&
# Download electron binaries here
export ELECTRON_CACHE="${PWD}/electron/bin" &&
export electron_config_cache="${PWD}/electron/bin" &&

printf "\n" &&
printf "${bold}${GRE} Building Beaker-ng...${c0}\n" &&
printf "\n" &&

npm install &&
npm run rebuild
}
case $1 in
	--build) buildBeaker; exit 0;;
esac

burnBeaker () {
# Optimization parameters
export CFLAGS="-DNDEBUG -mavx -maes -O3 -g0 -s -Wno-deprecated-declarations -Wno-implicit-fallthrough -Wno-cast-function-type -Wno-unused-variable" &&
export CXXFLAGS="-DNDEBUG -mavx -maes -O3 -g0 -s -Wno-deprecated-declarations -Wno-implicit-fallthrough -Wno-cast-function-type -Wno-unused-variable" &&
export CPPFLAGS="-DNDEBUG -mavx -maes -O3 -g0 -s -Wno-deprecated-declarations -Wno-implicit-fallthrough -Wno-cast-function-type -Wno-unused-variable" &&
export LDFLAGS="-mavx -maes -s" &&
export VERBOSE=1 &&
export V=1 &&

# Set msvs_version for node-gyp on Windows
export MSVS_VERSION="2017" &&
export GYP_MSVS_VERSION="2017" &&
# Download electron binaries here
export ELECTRON_CACHE="${PWD}/electron/bin" &&
export electron_config_cache="${PWD}/electron/bin" &&

printf "\n" &&
printf "${bold}${GRE} Running Burnthemall! and Building Beaker-ng...${c0}\n" &&
printf "\n" &&

npm run burnthemall
}
case $1 in
	--burn) burnBeaker; exit 0;;
esac

releaseBeaker () {
# Optimization parameters
export CFLAGS="-DNDEBUG -mavx -maes -O3 -g0 -s -Wno-deprecated-declarations -Wno-implicit-fallthrough -Wno-cast-function-type -Wno-unused-variable" &&
export CXXFLAGS="-DNDEBUG -mavx -maes -O3 -g0 -s -Wno-deprecated-declarations -Wno-implicit-fallthrough -Wno-cast-function-type -Wno-unused-variable" &&
export CPPFLAGS="-DNDEBUG -mavx -maes -O3 -g0 -s -Wno-deprecated-declarations -Wno-implicit-fallthrough -Wno-cast-function-type -Wno-unused-variable" &&
export LDFLAGS="-mavx -maes -s" &&
export VERBOSE=1 &&
export V=1 &&

# Set msvs_version for node-gyp on Windows
export MSVS_VERSION="2017" &&
export GYP_MSVS_VERSION="2017" &&
# Download electron binaries here
export ELECTRON_CACHE="${PWD}/electron/bin" &&
export electron_config_cache="${PWD}/electron/bin" &&

printf "\n" &&
printf "${bold}${GRE} Generating installation packages...${c0}\n" &&
printf "\n" &&

export NODE_ENV=production &&
npm run dist-mac
}
case $1 in
	--dist) releaseBeaker; exit 0;;
esac

packageBeaker () {
# Optimization parameters
export CFLAGS="-DNDEBUG -mavx -maes -O3 -g0 -s -Wno-deprecated-declarations -Wno-implicit-fallthrough -Wno-cast-function-type -Wno-unused-variable" &&
export CXXFLAGS="-DNDEBUG -mavx -maes -O3 -g0 -s -Wno-deprecated-declarations -Wno-implicit-fallthrough -Wno-cast-function-type -Wno-unused-variable" &&
export CPPFLAGS="-DNDEBUG -mavx -maes -O3 -g0 -s -Wno-deprecated-declarations -Wno-implicit-fallthrough -Wno-cast-function-type -Wno-unused-variable" &&
export LDFLAGS="-mavx -maes -s" &&
export VERBOSE=1 &&
export V=1 &&

# Set msvs_version for node-gyp on Windows
export MSVS_VERSION="2017" &&
export GYP_MSVS_VERSION="2017" &&
# Download electron binaries here
export ELECTRON_CACHE="${PWD}/electron/bin" &&
export electron_config_cache="${PWD}/electron/bin" &&

printf "\n" &&
printf "${bold}${GRE} Packaging Beaker-ng...${c0}\n" &&
printf "\n" &&

export NODE_ENV=production &&
npm run dist
}
case $1 in
	--dir) packageBeaker; exit 0;;
esac

printf "\n" &&
printf "${bold}${GRE}Script to build Beaker-ng on MacOS.${c0}\n" &&
printf "${bold}${YEL}Use the --deps flag to install build dependencies.${c0}\n" &&
printf "${bold}${YEL}Use the --build flag to build Beaker-ng.${c0}\n" &&
printf "${bold}${YEL}Use the --clean flag to run \`npm run clean\`.${c0}\n" &&
printf "${bold}${YEL}Use the --distclean flag to remove built packages.${c0}\n" &&
printf "${bold}${YEL}Use the --burn flag to burnthemall!.${c0}\n" &&
printf "${bold}${YEL}Use the --dist flag to generate installation packages.${c0}\n" &&
printf "${bold}${YEL}Use the --dir flag to build an unpacked dir in \`dist\`.${c0}\n" &&
printf "${bold}${YEL}Use the --help flag to show this help.${c0}\n" &&
printf "\n" &&
tput sgr0
