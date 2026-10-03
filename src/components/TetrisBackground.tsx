import React, { useEffect, useRef } from "react";

const SHAPES = [
  [[1, 1, 1, 1]],
  [
    [1, 1],
    [1, 1],
  ],
  [
    [0, 1, 0],
    [1, 1, 1],
  ],
  [
    [0, 1, 1],
    [1, 1, 0],
  ],
  [
    [1, 1, 0],
    [0, 1, 1],
  ],
  [
    [1, 0],
    [1, 0],
    [1, 1],
  ],
  [
    [0, 1],
    [0, 1],
    [1, 1],
  ],
];

const BLOCK = 22;

function rotatePiece(shape: number[][]): number[][] {
  const rows = shape.length;
  const cols = shape[0].length;
  const r: number[][] = [];
  for (let c = 0; c < cols; c++) {
    r.push([]);
    for (let row = rows - 1; row >= 0; row--) {
      r[c].push(shape[row][c]);
    }
  }
  return r;
}

class TetrisPiece {
  laneX: number;
  laneW: number;
  ch: number;
  shape: number[][] = [];
  x: number = 0;
  y: number = 0;
  speed: number = 0;
  opacity: number = 0;

  constructor(laneX: number, laneW: number, ch: number, initialY?: number) {
    this.laneX = laneX;
    this.laneW = laneW;
    this.ch = ch;
    this.spawn(initialY);
  }

  pickShape(): number[][] {
    let shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
    const rots = Math.floor(Math.random() * 4);
    for (let i = 0; i < rots; i++) shape = rotatePiece(shape);
    return shape;
  }

  spawn(forceY?: number): void {
    this.shape = this.pickShape();
    const pw = this.shape[0].length * BLOCK;
    const gap = Math.max(0, this.laneW - pw);
    this.x = this.laneX + Math.floor(Math.random() * (gap + 1));
    this.y =
      forceY !== undefined
        ? forceY
        : -(this.shape.length * BLOCK + 40 + Math.random() * 120);
    this.speed = 0.32 + Math.random() * 0.38;
    this.opacity = 0.16 + Math.random() * 0.12;
  }

  update(): void {
    this.y += this.speed;
    if (this.y > this.ch + 40) this.spawn();
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.save();
    this.shape.forEach((row, ri) => {
      row.forEach((cell, ci) => {
        if (!cell) return;
        const x = this.x + ci * BLOCK;
        const y = this.y + ri * BLOCK;
        const s = BLOCK - 2;
        ctx.fillStyle = `rgba(10,8,3,${this.opacity * 0.75})`;
        ctx.fillRect(x, y, s, s);
        ctx.strokeStyle = `rgba(212,168,67,${this.opacity})`;
        ctx.lineWidth = 1;
        ctx.strokeRect(x + 0.5, y + 0.5, s - 1, s - 1);
      });
    });
    ctx.restore();
  }
}

export const TetrisBackground: React.FC<{ active?: boolean }> = ({
  active = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let pieces: TetrisPiece[] = [];

    const buildPieces = () => {
      const w = canvas.width;
      const h = canvas.height;
      const n = Math.max(6, Math.floor(w / 110));
      const laneW = w / n;
      pieces = Array.from({ length: n }, (_, i) => {
        const laneX = i * laneW;
        const initialY = -60 + (i / n) * h;
        return new TetrisPiece(laneX, laneW, h, initialY);
      });
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      buildPieces();
    };

    const frame = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach((p) => {
        p.ch = canvas.height;
        p.update();
        p.draw(ctx);
      });
      animId = requestAnimationFrame(frame);
    };

    window.addEventListener("resize", resize);
    resize();
    frame();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 transition-opacity duration-500 ${
        active ? "opacity-100" : "opacity-0"
      }`}
    />
  );
};
