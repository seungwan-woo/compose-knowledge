# Frozen executed comparison protocol

Editorial correction after the run: “human” in the original protocol meant a relevance-based selection step; an AI tester performed it. Only that terminology is corrected here. The original frozen file and hash remain in the local audit artifacts.

This addendum records the executed baseline, after retrieval and before candidate access. Original questions.json and strategy.md remain unchanged. It is a fixed-question comparison with recorded AI-tester selection, not a fully deterministic ranking experiment.

The executed retrieval algorithm is:

1. For each new question, online sync, assert the expected full SHA, retain exact JSON, and set app/module/variant/artifact versions unknown. One frozen artifact+FQN search follows, limit2/max2048.
2. If the exact hits do not cover all decision-critical intent, issue the one frozen English query without a symbol, same context, limit2/max2048. In this baseline all14 questions used this refinement. Candidate uses the same criterion; it may avoid refinement if the exact results plus their one-hop raw evidence cover the whole question.
3. The AI tester selects direct substantive passages or their one-hop raw relatedIds based only on question relevance and visible titles/snippets. Prefer Guidance when it directly addresses the question, followed by the necessary bound raw source. A raw source more specific to the question can precede a generic card (q09 custom actions before generic replace-semantics); state this ordering in the record. Do not spend remaining reads on unrelated alternate cards. Stop when remaining accessible hits cannot resolve the question or its central supported facts are established; no requirement to spend three reads.
4. Every read requests min(3072,12288-actual_search_and_read_bytes_so_far), reserving that maximum before invocation. Therefore unused actual bytes from earlier responses are reclaimed. Never request below256, over3072, more than3 reads, or a section more than one hop from direct hits. Search output counts in the same12288 hard cap. Do not read unseen continuations or follow second-hop links.
5. Score only visible substantive evidence against the unchanged questions. Usable means all decision-critical parts are supported; partial means some support with at least one material gap; unsupported means no relevant behavioral support. Unknown source/app version applicability is always disclosed. No Android execution claim follows from corpus evidence.

Exact baseline command order, IDs and bytes are in baseline-selection.json and each question ledger. The same executed algorithm governs candidate retrieval, with independently recorded AI-tester choices. IDs and counts can differ because the search results and necessary evidence differ. This approach measures practical usability under a fixed question/budget rather than proving deterministic ranking quality.
