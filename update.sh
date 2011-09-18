#!/bin/sh

pdflatex resume.tex
git commit -a -m "updated site"
git push origin master
