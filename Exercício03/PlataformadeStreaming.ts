interface Media {
  play(): void;
  stop(): void;
}

class MediaType implements Media {
  constructor(private type: string) {}

  play(): void {
    console.log(`Reproduzindo ${this.type}...`);
  }
  stop(): void {
    console.log(`${this.type} parado.`);
  }
}

class MediaFactory {
  static create(type: string): Media {
    const validTypes = ["audio", "video", "podcast"];
    if (!validTypes.includes(type.toLowerCase())) {
      throw new Error("Tipo de mídia desconhecido");
    }
    return new MediaType(type);
  }
}

// Uso
try {
  ["audio", "video", "podcast"].forEach((type) => {
    const media = MediaFactory.create(type);
    media.play();
    media.stop();
  });
} catch (error) {
  console.error(error.message);
}
