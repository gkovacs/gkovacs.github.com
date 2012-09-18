#!/bin/sh

pdflatex resume.tex
#latex resume.tex
#catdvi -e 0 -U resume.dvi | sed -re "s/([^^[:space:]])\s+/\1 /g" > resume.txt
latex2html -html_version 4.0,latin1,unicode -split 1 -nonavigation -noinfo -noaddress -title "Geza Kovacs Resume" -dir resume-html -mkdir resume.tex
lynx resume-html/index.html -dump -nolist > resume.txt
git commit -a -m "updated site"
git push origin master
