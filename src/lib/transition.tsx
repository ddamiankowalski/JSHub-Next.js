"use client"

import { motion } from 'framer-motion';

export default function Transition({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ ease: 'easeInOut', duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  )
}