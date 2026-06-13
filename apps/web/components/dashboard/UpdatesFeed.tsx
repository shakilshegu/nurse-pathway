'use client';

import React from 'react';
import Link from 'next/link';

export function UpdatesFeed() {
  return (
    <div className="bg-white rounded-xl p-xl card-shadow border border-outline-variant/20">
      <div className="flex items-center justify-between mb-lg">
        <h5 className="text-title-lg font-title-lg text-primary">Updates</h5>
        <span className="material-symbols-outlined text-secondary">rss_feed</span>
      </div>
      <div className="space-y-base overflow-y-auto max-h-[360px] pr-xs">
        <div className="p-md rounded-lg bg-surface-container-low border-l-4 border-primary">
          <p className="text-label-sm text-primary font-bold mb-xs">Policy Change • 2h ago</p>
          <p className="text-body-md text-on-surface-variant mb-base">
            New simplified visa process for specialist nurses in Munich region. Read more.
          </p>
          <Link href="/updates" className="text-label-sm font-bold underline">
            Read Article
          </Link>
        </div>
        <div className="p-md rounded-lg bg-surface-container-low">
          <p className="text-label-sm text-secondary font-bold mb-xs">Success Story • 1d ago</p>
          <p className="text-body-md text-on-surface-variant">
            "NursePath helped me move to Hamburg in just 6 months!" — Maria R.
          </p>
        </div>
        <div className="p-md rounded-lg bg-surface-container-low">
          <p className="text-label-sm text-secondary font-bold mb-xs">System • 3d ago</p>
          <p className="text-body-md text-on-surface-variant">
            Maintenance scheduled for Sunday at 02:00 UTC. Your data is safe.
          </p>
        </div>
      </div>
    </div>
  );
}
