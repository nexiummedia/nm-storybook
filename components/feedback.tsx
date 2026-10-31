'use client';

import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, CheckCircle2, MessageSquare, Send } from 'lucide-react';

export function PageFeedback() {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [helpful, setHelpful] = useState<boolean | null>(null);
  const [comment, setComment] = useState<string>('');
  const [showCommentBox, setShowCommentBox] = useState<boolean>(false);
  const [commentSent, setCommentSent] = useState<boolean>(false);

  const handleVote = (isHelpful: boolean) => {
    setHelpful(isHelpful);
    setSubmitted(true);
    setShowCommentBox(true);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;
    setCommentSent(true);
  };

  return (
    <div className="mt-12 pt-8 border-t border-fd-border not-prose">
      <div className="rounded-xl border border-fd-border/70 bg-fd-card/50 p-5 shadow-xs transition-colors">
        {!submitted ? (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-medium text-fd-foreground">
                Was this page helpful?
              </h4>
              <p className="text-xs text-fd-muted-foreground mt-0.5">
                Let us know how we can make our documentation better.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleVote(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-fd-border bg-fd-background hover:bg-fd-accent hover:text-fd-accent-foreground transition-all duration-150 active:scale-95 cursor-pointer"
                aria-label="Mark page as helpful"
              >
                <ThumbsUp className="h-3.5 w-3.5 text-emerald-500" />
                <span>Yes</span>
              </button>
              <button
                type="button"
                onClick={() => handleVote(false)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-fd-border bg-fd-background hover:bg-fd-accent hover:text-fd-accent-foreground transition-all duration-150 active:scale-95 cursor-pointer"
                aria-label="Mark page as unhelpful"
              >
                <ThumbsDown className="h-3.5 w-3.5 text-rose-500" />
                <span>No</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="h-4 w-4" />
              <span>
                Thank you for your feedback! {helpful ? 'Glad this was useful.' : 'We are always looking to improve.'}
              </span>
            </div>

            {showCommentBox && !commentSent && (
              <form onSubmit={handleCommentSubmit} className="space-y-3 pt-2">
                <div className="relative">
                  <textarea
                    rows={2}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder={
                      helpful
                        ? 'Optional: What did you find most helpful?'
                        : 'Optional: How can we improve this page?'
                    }
                    className="w-full text-xs rounded-lg border border-fd-border bg-fd-background p-2.5 text-fd-foreground placeholder:text-fd-muted-foreground focus:outline-none focus:ring-1 focus:ring-fd-primary focus:border-fd-primary transition-all resize-none"
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowCommentBox(false)}
                    className="px-2.5 py-1 text-xs text-fd-muted-foreground hover:text-fd-foreground transition-colors cursor-pointer"
                  >
                    Skip
                  </button>
                  <button
                    type="submit"
                    disabled={!comment.trim()}
                    className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-md bg-fd-primary text-fd-primary-foreground hover:opacity-90 disabled:opacity-50 transition-opacity cursor-pointer"
                  >
                    <Send className="h-3 w-3" />
                    <span>Send comment</span>
                  </button>
                </div>
              </form>
            )}

            {commentSent && (
              <p className="text-xs text-fd-muted-foreground flex items-center gap-1.5">
                <MessageSquare className="h-3.5 w-3.5 text-fd-primary" />
                Your comment has been received by the docs team.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

