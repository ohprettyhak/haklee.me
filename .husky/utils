#!/usr/bin/env sh

_rgb_to_ansi() {
  r=$1
  g=$2
  b=$3
  printf "\033[1;38;2;%d;%d;%dm" "$r" "$g" "$b"
}

_hsv_to_rgb() {
  h=$1
  s=1
  v=1
  i=$(echo "$h * 6" | bc | awk '{print int($1)}')
  f=$(echo "$h * 6 - $i" | bc)
  p=$(echo "(1 - $s) * $v" | bc)
  q=$(echo "(1 - $f * $s) * $v" | bc)
  t=$(echo "(1 - (1 - $f) * $s) * $v" | bc)
  i=$((i % 6))

  case $i in
    0) r=$v; g=$t; b=$p ;;
    1) r=$q; g=$v; b=$p ;;
    2) r=$p; g=$v; b=$t ;;
    3) r=$p; g=$q; b=$v ;;
    4) r=$t; g=$p; b=$v ;;
    5) r=$v; g=$p; b=$q ;;
  esac

  r=$(echo "$r * 255" | bc | awk '{printf "%d", $1}')
  g=$(echo "$g * 255" | bc | awk '{printf "%d", $1}')
  b=$(echo "$b * 255" | bc | awk '{printf "%d", $1}')
  _rgb_to_ansi "$r" "$g" "$b"
}

_echo() {
  text="$1"
  text_length=${#text}
  output=""

  for i in $(seq 0 $(($text_length - 1))); do
    h=$(echo "$i / $text_length" | bc -l)
    color=$(_hsv_to_rgb "$h")
    output="${output}${color}${text:$i:1}\033[0m"
  done

  printf "%b\n" "$output"
}
