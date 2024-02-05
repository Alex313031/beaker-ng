mkdir icon.iconset &&
cp icons/16x16.png Icon16.png &&
cp icons/32x32.png Icon32.png &&
cp icons/64x64.png Icon64.png &&
cp icons/128x128.png Icon128.png &&
cp icons/256x256.png Icon256.png &&
cp icons/512x512.png Icon512.png &&
cp icons/1024x1024.png Icon1024.png &&
# sips -z 16 16     Icon1024.png --out icon.iconset/icon_16x16.png
# sips -z 32 32     Icon1024.png --out icon.iconset/icon_16x16@2x.png
# sips -z 32 32     Icon1024.png --out icon.iconset/icon_32x32.png
# sips -z 64 64     Icon1024.png --out icon.iconset/icon_32x32@2x.png
# sips -z 128 128   Icon1024.png --out icon.iconset/icon_128x128.png
# sips -z 256 256   Icon1024.png --out icon.iconset/icon_128x128@2x.png
# sips -z 256 256   Icon1024.png --out icon.iconset/icon_256x256.png
# sips -z 512 512   Icon1024.png --out icon.iconset/icon_256x256@2x.png
# sips -z 512 512   Icon1024.png --out icon.iconset/icon_512x512.png
cp Icon16.png icon.iconset/icon_16x16.png &&
cp Icon32.png icon.iconset/icon_16x16@2x.png &&
cp Icon32.png icon.iconset/icon_32x32.png &&
cp Icon64.png icon.iconset/icon_32x32@2x.png &&
cp Icon128.png icon.iconset/icon_128x128.png &&
cp Icon256.png icon.iconset/icon_128x128@2x.png &&
cp Icon256.png icon.iconset/icon_256x256.png &&
cp Icon512.png icon.iconset/icon_256x256@2x.png &&
cp Icon512.png icon.iconset/icon_512x512.png &&
cp Icon1024.png icon.iconset/icon_512x512@2x.png &&
iconutil -c icns --output icon.icns icon.iconset &&
rm -R icon.iconset &&
rm Icon16.png &&
rm Icon32.png &&
rm Icon64.png &&
rm Icon128.png &&
rm Icon256.png &&
rm Icon512.png &&
rm Icon1024.png
