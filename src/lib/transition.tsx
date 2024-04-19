'use client';

import { motion } from 'framer-motion';

export default function Transition({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`w-full ${className}`}
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ ease: 'easeInOut', duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}
