"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  youtubeId?: string;
  title?: string;
};

export function VideoLightbox({ open, onOpenChange, youtubeId, title }: Props) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md"
              />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="fixed left-1/2 top-1/2 z-50 w-[92vw] max-w-5xl -translate-x-1/2 -translate-y-1/2"
              >
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900 shadow-glow-cyan">
                  <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
                    <Dialog.Title className="text-sm font-medium text-zinc-200">
                      {title ?? "Now playing"}
                    </Dialog.Title>
                    <Dialog.Close className="rounded-full p-1.5 text-zinc-400 transition hover:bg-white/10 hover:text-white">
                      <X className="h-4 w-4" />
                    </Dialog.Close>
                  </div>
                  <div className="aspect-video w-full bg-black">
                    {youtubeId && (
                      <iframe
                        src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
                        title={title}
                        allow="autoplay; encrypted-media; picture-in-picture"
                        allowFullScreen
                        className="h-full w-full"
                      />
                    )}
                  </div>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
