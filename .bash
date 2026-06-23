#!/bin/bash
clear ; cd "$(dirname "${0}")"

deps() {
    echo -n 'node: ' ; node -v
    echo -n 'npm: ' ; npm -v
    echo -n 'npx: ' ; npx -v
    local ESBUILD_VERSION=`npx esbuild --version`
    echo "esbuild: ${ESBUILD_VERSION}"
}

clean() {
    rm -Rf js
    rm -Rf js-min
    rm -Rf css-min
}

transpile() {
    tsc
}

transpileAndWatch() {
    tsc --watch
}

minifyJS() {
    npx esbuild `find . \( -name 'js\*.mjs' -o -name '*.mjs' \)` --minify --outdir=js-min
    shopt -s globstar
    if ls js-min/**/*.js > /dev/null 2>&1; then
        for file in js-min/**/*.js; do
            newFile="${file%.js}.mjs"
            mv "${file}" "${newFile}"
        done
    fi
}

minifyCSS() {
    npx esbuild `find . \( -name 'css\*.css' -o -name '*.css' \)` --minify --outdir=css-min
}

run() {
    npx vite
}

########################## HIC SUNT DRACONES ##########################

RED_COLOR='\033[0;31m'
GREEN_COLOR='\033[0;32m'
YELLOW_COLOR='\033[0;33m'
BLUE_COLOR='\e[34m'
PURPLE_COLOR='\033[0;35m'
CYAN_COLOR='\033[0;36m'
WHITE_COLOR='\033[0;37m'

COLOR_RESET='\e[0m'

function _quit() { # pseudo-private
    exit 0;
}

function _menu() { # pseudo-private
    shopt -s lastpipe
    local COMMANDS=()
    while true ; do
        echo -ne ${CYAN_COLOR} ; printf '%*s\n' "$(tput cols)" '' | tr ' ' _ ; echo -ne ${COLOR_RESET}
        echo -e '\nAvailable commands:\n'
        local quitPrinted=no
        local i=0
        cat `basename ${0}` | grep -v '^function _' | grep '()\s{' | \
        while read functionName ; do
            local command=${functionName%%()*}
            if [[ "${command}" == 'quit' ]]; then
                echo -e " ${RED_COLOR}q)${COLOR_RESET} quit"
                quitPrinted=true
            else
                echo -e " ${GREEN_COLOR}${i})${COLOR_RESET} ${command}"
                COMMANDS[${i}]=${command}
                ((i++))
            fi
        done
        if [[ "${quitPrinted}" == 'no' ]]; then
            echo -e " ${RED_COLOR}q)${COLOR_RESET} quit"
        fi
        echo ; echo -n ': ' ; read -e options ; echo
        for option in ${options} ; do
            local commandToRun=''
            if [[ ${option} =~ ^[0-9]+$ ]]; then
                commandToRun=${COMMANDS[option]}
            else
                if [[ "${option,,}" == 'q' ]]; then
                    commandToRun='_quit'
                else
                    commandToRun=${option}
                fi
            fi
            "${commandToRun}" ; echo ; echo
        done
    done
}

function _main() { # pseudo-private
    if [ ${#} -eq 0 ] ; then
        echo -e "Usage: ${0} [COMMANDS]\n" ; _menu
    else
        for COMMAND in "${@}" ; do "${COMMAND}" ; echo ; done
    fi
}

_main "${@}"

########################## /HIC SUNT DRACONES ##########################
