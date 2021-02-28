var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = CheapThreads","category":"page"},{"location":"#CheapThreads","page":"Home","title":"CheapThreads","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [CheapThreads]","category":"page"},{"location":"#CheapThreads.UnsignedIteratorEarlyStop","page":"Home","title":"CheapThreads.UnsignedIteratorEarlyStop","text":"UnsignedIteratorEarlyStop(thread_mask[, num_threads = count_ones(thread_mask)])\n\nIterator, returning (i,t) = Tuple{UInt32,UInt32}, where i iterates from 1,2,...,num_threads, and t gives the threadids to call ThreadingUtilities.taskpointer with.\n\nUnfortunately, codegen is suboptimal when used in the ergonomic for (i,tid) ∈ thread_iterator fashion. If you want to microoptimize, You'd get better performance from a pattern like:\n\nfunction sumk(u,l = count_ones(u) % UInt32)\n    uu = ServiceSolicitation.UnsignedIteratorEarlyStop(u,l)\n    s = zero(UInt32); state = ServiceSolicitation.initial_state(uu)\n    while true\n        iter = iterate(uu, state)\n        iter === nothing && break\n        (i,t),state = iter\n        s += t\n    end\n    s\nend\n\nThis iterator will iterate at least once; it's important to check and exit early with a single threaded version.\n\n\n\n\n\n","category":"type"}]
}
