from PIL import Image, ImageOps
from pathlib import Path
root=Path(__file__).resolve().parents[1]
source=ImageOps.exif_transpose(Image.open(root/'public/images/melissa-panda-original.jpeg')).convert('RGB')
folder=root/'public/icons';folder.mkdir(exist_ok=True)
square=ImageOps.pad(source,(max(source.size),)*2,color='#ffd7ec')
for size in [32,180,192,512]:
 square.resize((size,size),Image.Resampling.LANCZOS).save(folder/f'panda-{size}.png')
mask=Image.new('RGB',(512,512),'#f9bad9');thumb=square.resize((286,286),Image.Resampling.LANCZOS);mask.paste(thumb,((512-286)//2,)*2);mask.save(folder/'panda-maskable-512.png')
square.save(root/'public/favicon.ico',sizes=[(16,16),(32,32),(48,48)])
for path in sorted(folder.glob('*.png')):
 with Image.open(path) as im: print(path.name,im.size,im.format)
